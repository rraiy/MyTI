import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Battle from './components/Battle';
import LiveChat from './components/LiveChat';

const Wrap = styled.div`
    width:1200px;
    height:1800px;
    background:transparent linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%) 0% 0% no-repeat padding-box;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const LiveGame = () => {
    return(
        <Wrap>
            <Header/>
            <Battle/>
            <LiveChat/>
        </Wrap>
    )
}

export default LiveGame;
