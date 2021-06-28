import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    margin-top:20px;
    display:flex;
    
    align-items:flex-end;
`

const TitleDiv = styled.div`
    
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    justify-content:center;
    align-items:center;
`

const P = styled.p`
    color:rgb(173,173,173);
    margin-bottom:52px;
    font-size:20px;
`

const Logo = styled.img`
    width:20px;
`

const H1 = styled.h1`
    font-size:36px;
    color:#fff;
`

const TourButton = styled.button`
    width:180px;
    height:48px;
    margin-right:100px;
    border-radius:5px;
    background:#FFFFFF24;
    color:#C7C7C7;
    font-size:16px;
`

const Header = () =>{

    return (
        <Wrap>
            <TitleDiv>
                <P><Logo src="" />DOTA2</P>
                <H1>WePlay AniMajor</H1>
            </TitleDiv>
            <TourButton>
                Tournaments
            </TourButton>
        </Wrap>
    )
}


export default Header;