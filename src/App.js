import React, {useState, useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import {db, storage} from './firebase/firestore';
import HomePage from './page/HomePage/HomePage';
import Navibar from '../src/page/Navibar/Navibar';
import RegisterPopup from '../src/page/Navibar/RegisterPopup';
import LoginPopup from '../src/page/Navibar/LoginPopup';
import LiveGame from '../src/page/LiveGame/LiveGame';
import AllTours from '../src/page/AllTours/AllTournaments';
import Member from '../src/page/Member/Member';
import {ResetStyle, GlobalStyle} from '../src/public_component/globalStyle';



const App = () =>{
    // console.log('App最頂')
    const [isSigned, setIsSigned] = useState(false);
    const [user, setUser] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userTeam, setUserTeam] = useState(null);
    const [userTour, setUserTour] = useState(null);
    const [userBirth, setUserBirth] = useState(null);

    const [loginPopup, setLoginPopup] = useState(false);
    const [registerPopup, setRegisterPopup] = useState(false);
    
    const showLoginPopup = () => {
        setLoginPopup(true)
    }

    const switchPopup = (popup) => {
        if(popup === 'login'){
            setLoginPopup(true)
            setRegisterPopup(false)
        } else{
            setLoginPopup(false)
            setRegisterPopup(true)
        }
    }

    const clickBlur = () => {
        setLoginPopup(false)
        setRegisterPopup(false)
    }

    const checkLogin = (uid, username) => {
        if(uid){
            setIsSigned(true);
            setUser(username);
            setUserToken(uid)
            // window.location.reload();
            
        }
    }

    const signOut = () => {
        setIsSigned(false);
        setUser(null);
    }

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                db.collection('member').doc(user.uid).get()
                .then(member => {
                    setIsSigned(true);
                    setUser(member.data().username);
                    setUserToken(member.data().uid);
                    setUserEmail(member.data().email);
                    setUserTeam(member.data().user_team);
                    setUserTour(member.data().user_tour);
                    setUserBirth(member.data().user_birth)
                })
            }
        })
    },[])


    return (
        
        <Router>
            <ResetStyle />
            <GlobalStyle />

            <Navibar showLoginPopup={showLoginPopup} isSigned={isSigned} user={user}/>
                {
                    loginPopup ?
                    <LoginPopup clickBlur={clickBlur} checkLogin={checkLogin} signOut={signOut} switchPopup={switchPopup}/>
                    :null
                }
                {
                    registerPopup ?
                    <RegisterPopup clickBlur={clickBlur} checkLogin={checkLogin} signOut={signOut} switchPopup={switchPopup}/>
                    :null
                }
            <Switch>
                
                <Route path="/" exact>
                    <HomePage isSigned={isSigned} user={user}/>
                </Route>

                <Route path="/tournaments" >
                    <AllTours isSigned={isSigned} user={user} userTour={userTour}/>
                </Route>

                <Route path="/stream">
                    <LiveGame isSigned={isSigned} user={user} />
                </Route>
                
                <Route path="/member">
                    <Member isSigned={isSigned} user={user} userToken={userToken} userEmail={userEmail} userTeam={userTeam} userTour={userTour} userBirth={userBirth}/>
                </Route>
            </Switch>
            
        </Router>
    )
}

export default App;