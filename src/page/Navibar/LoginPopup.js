import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { db } from '../../firebase/firestore';
import {
    Blur,
    LRPopupWrap,
    SignInBtn,
    LoginForm,
    Label,
    Input,
    LoginBtn,
    SeparateDiv,
    LoginGoogleBtn,
} from './css/LoginPopupSty';

const LoginPopup = ({ closePopup, checkLogin, signOut, switchPopup }) => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const insertToMember = (useruid, useremail, userDisplayName) => {
        db.collection('member')
            .doc(useruid)
            .set(
                {
                    uid: useruid,
                    email: useremail,
                    username: userDisplayName,
                    user_option: {
                        user_subscribe: false,
                        user_team: '',
                        user_tour: [],
                    },
                },
                { merge: true },
            );
    };

    const onLogin = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(() => {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        db.collection('member')
                            .doc(user.uid)
                            .get()
                            .then((member) => {
                                checkLogin(user.uid, member.data().username);
                                setLoginSuccess(true);
                            })
                            .then(() => {
                                setTimeout(() => {
                                    closePopup();
                                }, 3000);
                            });
                    }
                });
            });
    };

    const onLoginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { user } = res; // uid here
                console.log(user);
                insertToMember(user.uid, user.email, user.displayName);
                setLoginSuccess(true);
            })
            .then(() => {
                setTimeout(() => {
                    closePopup();
                }, 3000);
            })
            .catch((err) => console.log(err));
    };

    const onSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log('登出惹');
                signOut();
            });
    };

    return (
        <>
            <Blur onClick={closePopup} />
            {loginSuccess ? (
                <LRPopupWrap success="#fff">
                    <p>登入成功 請等待稍後跳轉</p>
                </LRPopupWrap>
            ) : (
                <LRPopupWrap>
                    <SignInBtn onClick={() => switchPopup('signup')}>Sign up</SignInBtn>

                    <LoginForm onSubmit={onLogin}>
                        <h2>Sign In</h2>

                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="mail"
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />

                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="text"
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />

                        <LoginBtn type="submit">Sign In</LoginBtn>
                    </LoginForm>

                    <SeparateDiv>
                        <hr />
                        <p>or</p>
                        <hr />
                    </SeparateDiv>

                    <LoginGoogleBtn onClick={onLoginWithGoogle}>Sign in with Google</LoginGoogleBtn>
                </LRPopupWrap>
            )}
        </>
    );
};

export default LoginPopup;
