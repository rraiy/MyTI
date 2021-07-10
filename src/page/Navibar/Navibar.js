import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import{NavibarWrap, Blur, LogoDiv, PageUL, SearchRegisterWrap, SearchInput, Button, MenuI, MenuUl} from './css/NavibarSty'
// import LoginRegisterPopup from './LoginRegisterPopup'
import dotaLogo from '../../images/dota2_logo.png';
import aegis from '../../images/aegis.png';
import searchI from '../../images/icon/search.png';
import menuI from '../../images/icon/menu.png';



const Navibar = ({showLoginPopup, isSigned, user}) => {

    console.log(isSigned)


    return (
        <NavibarWrap>
            <MenuI src={menuI} alt="" />
            <LogoDiv>
                <img src={aegis} alt="" />
                <p>MyTI</p>
            </LogoDiv>

            
            <PageUL>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/tournaments'>
                    <li>Tournaments</li>
                </Link>
                <Link to='/stream'>
                    <li>Stream</li>
                </Link>
                {
                    isSigned?
                    <Link to='/member'><li>Member</li></Link>
                    : null
                }
            </PageUL>

            <SearchRegisterWrap>
                <img src={searchI} alt="" />
                <SearchInput type="text" placeholder="Tournaments..."/>
                {
                    !isSigned ?
                    <Button onClick={showLoginPopup}>Sign in</Button>
                    :
                    <Button className="navibar_user">{user}</Button>
                }
                <MenuUl className="user_menu">
                <Link to="/member/accountsetting"><li>Profile</li></Link>
                <Link to="/member/userteam"><li>Favorite</li></Link>
                <Link to="/member/calendar"><li>Calendar</li></Link>
                <li><button>Sign out</button></li>
                </MenuUl>
            </SearchRegisterWrap>
        </NavibarWrap>
    )
}

export default Navibar;