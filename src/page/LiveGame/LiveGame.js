import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import Battle from './components/Battle';
import LiveChat from './components/LiveChat';
import db from '../../firebase/firestore'

const Wrap = styled.div`
    min-width:1200px;
    height:1800px;
    background:transparent linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%) 0% 0% no-repeat padding-box;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const LiveGame = () => {

    console.log('555')

    


    


    return(
        <Wrap>
            <Header/>
            <Battle/>
            <LiveChat/>
        </Wrap>
    )
}

export default LiveGame;
