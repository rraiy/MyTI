import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import Battle from './components/Battle';
import LiveChat from './components/LiveChat';

const Wrap = styled.div`
    min-width:1200px;
    // height:100%;
    background:transparent linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%) 0% 0% no-repeat padding-box;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:120px;

    @media (max-width:1199px) and (min-width:700px){
        min-width:700px;
    }

    @media (max-width:699px) and (min-width:360px){
        min-width:360px;
    }
`


const LiveGame = ({isSigned,user}) => {


    return(
        <Wrap>
            <Header/>
            <Battle />
            <LiveChat isSigned={isSigned} user={user}/>
        </Wrap>
    )
}

export default LiveGame;
