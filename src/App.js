import React, {useState, useEffect}from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import db from './firebase/firestore';
import styled from 'styled-components';
import Navibar from '../src/page/Navibar/Navbar';
import RegisterPopup from '../src/page/Navibar/RegisterPopup';
import LoginPopup from '../src/page/Navibar/LoginPopup';
import LiveGame from '../src/page/LiveGame/LiveGame';
import AllTours from '../src/page/AllTours/AllTournaments';
import Member from '../src/page/Member/Member';
import {ResetStyle, GlobalStyle} from '../src/public_component/globalStyle';

const Blur = styled.div`
    width:1200px;
    height:1200px;
    background:rgba(0,0,0,0.73);
    position:fixed;
`

const App = () =>{
    const [isSigned, setIsSigned] = useState(false);
    const [user, setUser] = useState(null);
    const [popup, setPopup] = useState(false);

    const showPopup = () => {
        setPopup(true)
    }

    const clickBlur = () => {
        setPopup(false)
    }

    const checkLogin = (uid, username) => {
        if(uid){
            setIsSigned(true);
            setUser(username);
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
                })
            }
        })
    },[])


    return (
        
        <React.Fragment>
            <ResetStyle />
            <GlobalStyle />
            <Navibar showPopup={showPopup} isSigned={isSigned} user={user}/>
            {
                popup ?
                <LoginPopup clickBlur={clickBlur} checkLogin={checkLogin} signOut={signOut}/>
                :null
            }
        
            {/* <AllTours isSigned={isSigned} user={user}/> */}
            <LiveGame isSigned={isSigned} user={user}/>
            {/* <Member isSigned={isSigned} user={user}/> */}
            
            
        </React.Fragment>
    )
}

export default App;