import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  NavibarWrap,
  LogoDiv,
  PageUL,
  SearchRegisterWrap,
  SearchInput,
  Button,
  MenuI,
  MenuUl,
  UserMenuDiv,
  SignoutBtn,
} from './css/NavibarSty';
import aegis from '../../images/aegis.png';
import searchI from '../../images/icon/search.png';
import menuI from '../../images/icon/menu.png';

const Navibar = ({ showLoginPopup, isSigned, user, signOut }) => {
  const [menuActive, setMenuActive] = useState(false);

  const onSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        signOut();
      });
  };

  // const test = (e) => {
  //   e.stopPropagation();
  //   setMenuActive('block');
  // };

  // const test2 = (e) => {
  //   e.stopPropagation();
  //   setMenuActive('none');
  // };

  return (
    <NavibarWrap>
      <MenuI src={menuI} alt="" />
      <LogoDiv>
        <img src={aegis} alt="" />
        <p>MyTI</p>
      </LogoDiv>

      <PageUL>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/tournaments">
          <li>Tournaments</li>
        </Link>
        <Link to="/stream">
          <li>Stream</li>
        </Link>
        {isSigned ? (
          <Link to="/member">
            <li>Member</li>
          </Link>
        ) : null}
      </PageUL>

      <SearchRegisterWrap>
        <img src={searchI} alt="search" />
        <SearchInput type="text" placeholder="Tournaments..." />
        {!isSigned ? (
          <Button onClick={showLoginPopup}>Sign in</Button>
        ) : (
          <UserMenuDiv onClick={() => setMenuActive(!menuActive)} className="navibar_user">
            {user}
            {menuActive && (
              <MenuUl className="user_menu">
                <Link to="/member/accountsetting">
                  <li>Profile</li>
                </Link>
                <Link to="/member/userteam">
                  <li>Favorite</li>
                </Link>
                <Link to="/member/calendar">
                  <li>Calendar</li>
                </Link>
                <li>
                  <SignoutBtn onClick={onSignOut}>Sign out</SignoutBtn>
                </li>
              </MenuUl>
            )}
          </UserMenuDiv>
        )}
      </SearchRegisterWrap>
    </NavibarWrap>
  );
};

export default Navibar;
