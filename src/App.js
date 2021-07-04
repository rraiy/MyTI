import React from 'react';
import styled from 'styled-components';
import Navibar from '../src/page/Navibar/Navbar';
import LoginRegisterPopup from '../src/page/Navibar/LoginRegisterPopup';
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

    console.log('5566')

    return (
        
        <React.Fragment>
            <ResetStyle />
            <GlobalStyle />
            {/* <Navibar/> */}
            
            <LoginRegisterPopup/>
            {/* <AllTours/> */}
            {/* <LiveGame/> */}
            {/* <Member/> */}
        </React.Fragment>
    )
}

export default App;