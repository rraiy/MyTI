import React, {useState, useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import {db, storage} from './firebase/firestore';
import HomePage from './page/HomePage/HomePage';
import Navibar from '../src/page/Navibar/Navbar';
import RegisterPopup from '../src/page/Navibar/RegisterPopup';
import LoginPopup from '../src/page/Navibar/LoginPopup';
import LiveGame from '../src/page/LiveGame/LiveGame';
import AllTours from '../src/page/AllTours/AllTournaments';
import Member from '../src/page/Member/Member';
import {ResetStyle, GlobalStyle} from '../src/public_component/globalStyle';



const App = () =>{
    console.log('App最頂')
    const [isSigned, setIsSigned] = useState(false);
    const [user, setUser] = useState(null);
    const [loginPopup, setLoginPopup] = useState(false);
    const [registerPopup, setRegisterPopup] = useState(false);
    const [userToken, setUserToken] = useState(null);

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
                    setUserToken(member.data().uid)
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
                    :console.log('App return')
                }
                {
                    registerPopup ?
                    <RegisterPopup clickBlur={clickBlur} checkLogin={checkLogin} signOut={signOut} switchPopup={switchPopup}/>
                    :null
                }
            <Switch>
                
                <Route path="/" exact>
                    <HomePage />
                </Route>

                <Route path="/tournaments" >
                    <AllTours isSigned={isSigned} user={user}/>
                </Route>

                <Route path="/stream">
                    <LiveGame isSigned={isSigned} user={user}/>
                </Route>
                
                <Route path="/member">
                    <Member isSigned={isSigned} user={user} userToken={userToken}/>
                </Route>
            </Switch>
            
        </Router>
    )
}

export default App;