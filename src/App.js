import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { db, storage } from './firebase/firestore';
import { Loader } from './public_component/globalStyle';
import HomePage from './page/HomePage/HomePage';
import Navibar from './page/Navibar/Navibar';
import RegisterPopup from './page/Navibar/RegisterPopup';
import LoginPopup from './page/Navibar/LoginPopup';
import LiveGame from './page/LiveGame/LiveGame';
import AllTours from './page/AllTours/AllTournaments';
import OneTour from './page/OneTour/OneTour';
import Member from './page/Member/Member';
import Footer from './page/Footer/Footer';
import { ResetStyle, GlobalStyle } from './public_component/globalStyle';
import { getAllIconStorageUrl, getAllTeamStorageUrl } from './utils/storageUrl';

const App = () => {
  // console.log('App最頂')
  const [isChecking, setChecking] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userTeam, setUserTeam] = useState(null);
  const [userTeamLogo, setUserTeamLogo] = useState(null);
  const [userTour, setUserTour] = useState(null);
  const [userBirth, setUserBirth] = useState(null);

  // storage fetch data
  const [icons, setIcons] = useState(null);
  const [teamLogos, setTeamLogos] = useState(null);

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

  const checkLogin = (uid) => {
    if (uid) {
      setIsSigned(true);
      setUserToken(uid);
      // window.location.reload();
    }
  };

  const signOut = () => {
    setIsSigned(false);
    setUser(null);
    setUserToken(null);
    setUserEmail(null);
    setUserTeam(null);
    setUserTeamLogo(null);
    setUserTour(null);
    setUserBirth(null);
    window.location.reload();
  };

  const fetchUserData = (data) => {
    setUser(data.username);
    setUserToken(data.uid);
    setUserEmail(data.email);
    setUserTeam(data.user_team);
    setUserTeamLogo(data.user_team_logo);
    setUserTour(data.user_tour);
    setUserBirth(data.birthday);
    return data.uid;
  };

  useEffect(() => {
    // bug 監聽寫裡面不知道怎麼取消
    firebase.auth().onAuthStateChanged((loginUser) => {
      if (loginUser) {
        db.collection('member')
          .doc(loginUser.uid)
          .get()
          .then((member) => fetchUserData(member.data()))
          .then((uid) => {
            db.collection('member')
              .doc(uid)
              .onSnapshot((update) => {
                fetchUserData(update.data());
              });
          })
          .then(() => {
            setIsSigned(true);
            setChecking(false);
          })
          .catch((err) => console.log(err));
      } else {
        setChecking(false);
      }
    });
    setIcons(getAllIconStorageUrl());
    setTeamLogos(getAllTeamStorageUrl());
  }, []);

  // if (isChecking) {
  //   return <div> Loading...</div>;
  // }

  return (
    <Router>
      <ResetStyle />
      <GlobalStyle />

      <Navibar
        showLoginPopup={showLoginPopup}
        isSigned={isSigned}
        user={user}
        signOut={signOut}
        userTeamLogo={userTeamLogo}
      />
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

        <Route path="/tour" exact>
          <OneTour isSigned={isSigned} user={user} />
        </Route>

        <Route path="/tournaments">
          <AllTours
            isSigned={isSigned}
            user={user}
            userTour={userTour}
            userToken={userToken}
            showLoginPopup={showLoginPopup}
          />
        </Route>

        <Route path="/stream">
          <LiveGame isSigned={isSigned} user={user} userTeamLogo={userTeamLogo} />
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
            // teamLogos={teamLogos}
            userTeamLogo={userTeamLogo}
          />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
