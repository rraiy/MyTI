import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import LoginRegisterPopup from './LoginRegisterPopup'
import {primary, fontGrey, fontWhite, fontWaring} from '../../public_component/globalStyle';
import dotaLogo from '../../images/dota2_logo.png';
import aegis from '../../images/aegis.png';
import searchI from '../../images/icon/search.png';
import menuI from '../../images/icon/menu.png';

const NavibarWrap = styled.div`
    width:100%;
    height:80px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:rgb(29,12,52);
    color:${fontGrey};
    padding:20px;
    font-size:24px;
    position:fixed;
    top:0;
    z-index:2;

    @media (max-width: 900px) {

    }

    @media (max-width: 500px) {

    }

`
const Blur = styled.div`
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.73);
`


const LogoDiv = styled.div`
    display:flex;
    align-items:center;
    // width:132px;
    
    img{
        width:40px;
        height:40px;
        margin-right:10px;
        
    }

    @media (max-width: 500px) {
        width:auto;
        p{
            display:none;
        }
        img{
            margin-right:0;
        }
    }
`

const MenuI = styled.img`
    display:none;

    @media (max-width: 800px) {

        display:inline-block;
        width:30px;
    }

`

const PageUL = styled.ul`
    width:400px;
    display:flex;
    justify-content:space-around;
    font-size:16px;

    @media (max-width: 800px) {
        // order:-1;
        display:none;
    }
    
`

const SearchRegisterWrap = styled.div`
    position:relative;
    img{
        width:18px;
        position:absolute;
        z-index:1;
        top:6px;
        left:8px;
    }
    @media (max-width: 800px) {
        img{
            left:-36px;
        }
    }

    @media (max-width: 500px) {
        img{
            display:none;
        }
    }

`

const SearchInput = styled.input`
    width:160px;
    height:30px;
    border:3px solid rgb(83,83,83);
    border-radius:10px;
    background:rgba(67,67,67,56);
    padding-inline-start:30px;
    margin-right:16px;

    @media (max-width: 800px) {
        display:none;
    }
`

const Button = styled.button`
    color:${primary};
    border:2px solid ${primary};
    border-radius:56px;
    padding:4px 10px;
    margin-right:30px;

    :hover{
        color:${fontWhite};
        background:${primary};
        cursor:pointer;
    }

    @media (max-width: 800px) {
        margin-right:0;
    }
`

const Navibar = ({showPopup}) => {

    return (
        <NavibarWrap>
            {/* <Blur> */}
            <MenuI src={menuI} alt="" />
            <LogoDiv>
                <img src={aegis} alt="" />
                <p>MyTI</p>
            </LogoDiv>

            
            <PageUL>
                <li>Home</li>
                <li>Tournaments</li>
                <li>Stream</li>
            </PageUL>

            <SearchRegisterWrap>
                <img src={searchI} alt="" />
                <SearchInput type="text" placeholder="Tournaments..."/>
                <Button onClick={showPopup}>Sign in</Button>
            </SearchRegisterWrap>
            {/* </Blur> */}
        </NavibarWrap>
    )
}

export default Navibar;