import React from 'react';
import styled from 'styled-components';
import dotaLogo from '../../../images/dota2_logo.png';
import tourIcon from '../../../images/icon/tour.png';

const Wrap = styled.div`
    margin-top:20px;
    position:relative;
    margin-bottom:152px;

    @media (max-width:1199px){
        width:700px;
        position:static;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-bottom:100px;
    }

    @media (max-width:699px){
        width:700px;
        position:static;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-bottom:30px;
    }

`

const TitleDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    justify-content:center;
    align-items:center;

    @media (max-width:699px) and (min-width:360px){
        flex-direction:row;
    }
`

const P = styled.p`
    color:rgb(173,173,173);
    margin-bottom:52px;
    font-size:20px;
    
    @media (max-width:699px) and (min-width:360px){
        font-size:14px;
        margin-right:8px;
        margin-bottom:0;
        text-align:center;

    }
`


const Logo = styled.img`
    width:20px;
    margin-right:8px;
`

const H1 = styled.h1`
    font-size:36px;
    color:#fff;

    @media (max-width:699px) and (min-width:360px){
        font-size:16px;
    }
`

const TourButton = styled.button`
    width:180px;
    height:48px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:100px;
    border-radius:5px;
    background:#FFFFFF24;
    color:#C7C7C7;
    font-size:16px;
    position:absolute;
    right:-500px;
    bottom:0px;

    @media (max-width:1199px) and (min-width:699px){
        width:140px;
        height:48px;
        right:-250px;
        bottom:0px;
        font-size:14px;
        position:static;
        margin-top:40px;
        margin-right:0;
        padding:8px;
    }
    
`
const TourI = styled.img`
    width:24px;
    margin-right:8px;
`

const Header = () =>{

    return (
        <Wrap>
            <TitleDiv>
                <P><Logo src={dotaLogo} />DOTA2</P>
                <H1>WePlay AniMajor</H1>
            </TitleDiv>
            <TourButton>
                <TourI src={tourIcon} alt="" />
                <p>Tournaments</p>
            </TourButton>
        </Wrap>
    )
}


export default Header;