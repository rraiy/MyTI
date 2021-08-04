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

const LoginPopup = ({ closePopup, checkLogin, switchPopup }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const insertToMember = (useruid, useremail, userDisplayName) => {
    db.collection('member').doc(useruid).set(
      {
        uid: useruid,
        email: useremail,
        birthday: '',
        username: userDisplayName,
        user_tour: '',
        user_team: '',
        user_team_logo: '',
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
      })
      .catch((err) => setErrorMessage(err.message));
  };

  const onLoginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { user } = res; // uid here

        db.collection('member')
          .where('email', '==', user.email)
          .get()
          .then((q) => {
            if (q.empty === true) {
              insertToMember(user.uid, user.email, user.displayName);
              setLoginSuccess(true);
            } else {
              checkLogin(user.uid);
              setLoginSuccess(true);
            }
          });
      })
      .then(() => {
        setTimeout(() => {
          closePopup();
        }, 3000);
      })
      .catch((err) => console.log(err));
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
            <Input id="email" type="mail" onChange={(e) => setLoginEmail(e.target.value)} />

            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <LoginBtn type="submit">Sign In</LoginBtn>
            <p className="error">{errorMessage}</p>
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
