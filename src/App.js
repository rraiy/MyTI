import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { db, storage } from './firebase/firestore';
import HomePage from './page/HomePage/HomePage';
import Navibar from './page/Navibar/Navibar';
import RegisterPopup from './page/Navibar/RegisterPopup';
import LoginPopup from './page/Navibar/LoginPopup';
import LiveGame from './page/LiveGame/LiveGame';
import AllTours from './page/AllTours/AllTournaments';
import Member from './page/Member/Member';
import { ResetStyle, GlobalStyle } from './public_component/globalStyle';

const App = () => {
  // console.log('App最頂')
  const [isChecking, setChecking] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userTeam, setUserTeam] = useState(null);
  const [userTour, setUserTour] = useState(null);
  const [userBirth, setUserBirth] = useState(null);

  // open login register popup
  const [loginPopup, setLoginPopup] = useState(false);
  const [registerPopup, setRegisterPopup] = useState(false);
  const showLoginPopup = () => {
    setLoginPopup(true);
  };

  const switchPopup = (popup) => {
    if (popup === 'login') {
      setLoginPopup(true);
      setRegisterPopup(false);
    } else {
      setLoginPopup(false);
      setRegisterPopup(true);
    }
  };

  const closePopup = () => {
    setLoginPopup(false);
    setRegisterPopup(false);
  };

  const checkLogin = (uid, username) => {
    if (uid) {
      setIsSigned(true);
      setUser(username);
      setUserToken(uid);
      // window.location.reload();
    }
  };

  const signOut = () => {
    setIsSigned(false);
    setUser(null);
  };

  const fetchUserData = (data) => {
    setUser(data.username);
    setUserToken(data.uid);
    setUserEmail(data.email);
    setUserTeam(data.user_team);
    setUserTour(data.user_tour);
    setUserBirth(data.birthday);
    return data.uid;
  };

  // async function handlerUserState (){
  //     firebase.auth().onAuthStateChanged(user=>{
  //         if(user){
  //             db.collection('member').doc(user.uid).get()
  //             .then(member => fetchUserData(member.data()))
  //         }
  //     })
  // }

  // async function listenUserUpdate(uid){
  //     db.collection('member').doc(uid).onSnapshot(update=>{
  //         fetchUserData(update.data())
  //     })
  // }

  // useEffect(()=>{

  //     const listenUserUpdate = async () =>{
  //         const uid = await handlerUserState();
  //         console.log('effect 拿到' ,uid)
  //     };

  //     listenUserUpdate();

  // },[])

  useEffect(() => {
    // bug 監聽寫裡面不知道怎麼取消
    firebase.auth().onAuthStateChanged((loginUser) => {
      if (loginUser) {
        db.collection('member')
          .doc(loginUser.uid)
          .get()
          .then((member) => fetchUserData(member.data()))
          .then((uid) => {
            setIsSigned(true);
            setChecking(false);
            db.collection('member')
              .doc(uid)
              .onSnapshot((update) => {
                fetchUserData(update.data());
              });
          })
          .catch((err) => console.log(err));
      } else {
        setChecking(false);
      }
    });
  }, []);

  // if (isChecking) {
  //   return <div> Loading...</div>;
  // }

  return (
    <Router>
      <ResetStyle />
      <GlobalStyle />

      <Navibar showLoginPopup={showLoginPopup} isSigned={isSigned} user={user} signOut={signOut} />
      {loginPopup ? (
        <LoginPopup
          closePopup={closePopup}
          checkLogin={checkLogin}
          signOut={signOut}
          switchPopup={switchPopup}
        />
      ) : null}
      {registerPopup ? (
        <RegisterPopup
          closePopup={closePopup}
          checkLogin={checkLogin}
          signOut={signOut}
          switchPopup={switchPopup}
        />
      ) : null}
      <Switch>
        <Route path="/" exact>
          <HomePage isSigned={isSigned} user={user} />
        </Route>

        <Route path="/tournaments">
          <AllTours isSigned={isSigned} user={user} userTour={userTour} />
        </Route>

        <Route path="/stream">
          <LiveGame isSigned={isSigned} user={user} />
        </Route>

        <Route path="/member">
          <Member
            isSigned={isSigned}
            user={user}
            userToken={userToken}
            userEmail={userEmail}
            userTeam={userTeam}
            userTour={userTour}
            userBirth={userBirth}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
