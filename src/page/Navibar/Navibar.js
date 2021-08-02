import React, { useState, useEffect } from 'react';
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
  PhoneMenuUl,
} from './css/NavibarSty';
import aegis from '../../images/aegis.png';
// import searchI from '../../images/icon/search.png';
import menuI from '../../images/icon/menu.png';

const Navibar = ({ showLoginPopup, isSigned, user, signOut, userTeamLogo }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [phoneNav, setPhoneNav] = useState(false);
  const [browserHeight, setBrowserHeight] = useState(null);

  const onSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        signOut();
      });
  };

  const handleHref = (e) => {
    if (e.target.nodeName === 'LI') {
      setPhoneNav(!phoneNav);
    }
  };

  useEffect(() => {
    setBrowserHeight(document.body.scrollHeight);
    console.log(userTeamLogo);
  }, []);

  return (
    <NavibarWrap>
      <MenuI src={menuI} alt="" onClick={() => setPhoneNav(!phoneNav)} />

      {!phoneNav ? null : (
        <PhoneMenuUl height={`${browserHeight}px`} onClick={(e) => handleHref(e)}>
          <Link to="/">
            <li key="home">Home</li>
          </Link>
          <Link to="/tournaments">
            <li key="tour">Tournaments</li>
          </Link>
          <Link to="/stream">
            <li key="stream">Stream</li>
          </Link>
          {isSigned ? (
            <Link to="/member">
              <li key="member">Member</li>
            </Link>
          ) : null}
        </PhoneMenuUl>
      )}
      <Link to="/">
        <LogoDiv>
          <img src={aegis} alt="MyTI logo" />
          <p>MyTI</p>
        </LogoDiv>
      </Link>

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
        {/* <img src={searchI} alt="search" />
        <SearchInput type="text" placeholder="Tournaments..." /> */}
        {!isSigned ? (
          <Button onClick={showLoginPopup}>Sign in</Button>
        ) : (
          <UserMenuDiv
            onClick={() => setMenuActive(!menuActive)}
            onMouseEnter={() => setMenuActive(!menuActive)}
            className="navibar_user"
          >
            {!userTeamLogo ? null : <img src={userTeamLogo} alt="favorite team" />}

            <p>{user}</p>
            {menuActive && (
              <MenuUl
                className="user_menu"
                onMouseEnter={() => setMenuActive(menuActive)}
                onMouseLeave={() => setMenuActive(!menuActive)}
              >
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
