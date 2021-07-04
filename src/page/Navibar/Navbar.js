import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import LoginRegisterPopup from './LoginRegisterPopup'
import {primary, fontGrey, fontWhite, fontWaring} from '../../public_component/globalStyle';
import dotaLogo from '../../images/dota2_logo.png';
import aegis from '../../images/aegis.png';

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

`
const Blur = styled.div`
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.73);
`


const LogoDiv = styled.div`
    display:flex;
    align-items:center;
    width:132px;
    
    img{
        width:40px;
        height:40px;
        margin-right:10px;
        
    }
`

const PageUL = styled.ul`
    width:400px;
    display:flex;
    justify-content:space-around;
    font-size:22px;

`

const SearchRegisterWrap = styled.div`
    position:relative;
    img{
        width:20px;
        position:absolute;
        z-index:1;
        top:4px;
        left:8px;
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
`

const Navibar = ({showPopup}) => {

    const openLoginOrRegister = () => {
        showPopup();
    }

    return (
        <NavibarWrap>
            {/* <Blur> */}
            
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
                <img src={dotaLogo} alt="" />
                <SearchInput type="text" placeholder="Tournaments..."/>
                <Button onClick={openLoginOrRegister}>註冊/登入</Button>
            </SearchRegisterWrap>
            {/* </Blur> */}
        </NavibarWrap>
    )
}

export default Navibar;