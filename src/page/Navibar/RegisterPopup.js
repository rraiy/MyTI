/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { db } from '../../firebase/firestore';
import {
  Blur,
  LRPopupWrap,
  SignInBtn,
  RegisterForm,
  Label,
  Input,
  RegisterBtn,
  SeparateDiv,
  RegisterGoogleBtn,
} from './css/RegisterPopupSty';

const RegisterPopup = ({ closePopup, checkLogin, signOut, switchPopup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const insertToMember = (uid) => {
    db.collection('member').doc(uid).set(
      {
        uid: uid,
        email: email,
        birthday: '',
        username: username,
        user_tour: '',
        user_team: '',
        user_team_logo: '',
      },
      { merge: true },
    );
  };

  const onRegister = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        insertToMember(user.uid);
        firebase.auth().onAuthStateChanged((loginUser) => {
          if (loginUser) {
            db.collection('member')
              .doc(user.uid)
              .get()
              .then((member) => {
                checkLogin(user.uid, member.data().username);
                setRegSuccess(true);
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

  // const onRegisterWithGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((res) => {
  //       const { user } = res; // uid here
  //       insertToMember(user.uid);
  //     })
  //     .then(() => {
  //       setTimeout(() => {
  //         closePopup();
  //       }, 3000);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <Blur onClick={closePopup} />
      {regSuccess ? (
        <LRPopupWrap success="#fff">
          <p>註冊並登入成功 請等待稍後跳轉</p>
        </LRPopupWrap>
      ) : (
        <LRPopupWrap>
          <SignInBtn onClick={() => switchPopup('login')}>Sign In</SignInBtn>

          <RegisterForm onSubmit={onRegister}>
            <h2>Sign Up</h2>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <RegisterBtn type="submit">Sign Up</RegisterBtn>

            <p className="error">{errorMessage}</p>
          </RegisterForm>

          {/* <SeparateDiv>
            <hr />
            <p>or</p>
            <hr />
          </SeparateDiv> */}

          {/* <RegisterGoogleBtn onClick={onRegisterWithGoogle}>Sign in with Google</RegisterGoogleBtn> */}
        </LRPopupWrap>
      )}
    </>
  );
};

export default RegisterPopup;
