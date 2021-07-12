/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import AccountSetting from './components/AccountSetting';
import TeamsSetting from './components/TeamsSetting';
import Calendar from './components/UserCalendar';
import { Wrap } from '../../public_component/globalStyle';
import { AreaBtn, BtnWrap } from './components/css/MemberSty';

// eslint-disable-next-line no-underscore-dangle
const _wurl = function (type) {
  // eslint-disable-next-line no-restricted-globals
  const orig = history[type];
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const rv = orig.apply(this, arguments);
    const e = new Event(type);
    // eslint-disable-next-line prefer-rest-params
    e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
};

// eslint-disable-next-line no-restricted-globals
history.pushState = _wurl('pushState');
// eslint-disable-next-line no-restricted-globals
history.replaceState = _wurl('replaceState');

const Member = ({ isSigned, user, userToken, userEmail, userTeam, userTour, userBirth }) => {
  const { path, url } = useRouteMatch();
  const [isLoading, setLoading] = useState(true);
  const [activeArea, setActiveArea] = useState('calendar');
  const [AreaSwitch, setAreaSwitch] = useState({
    account: false,
    teams: false,
    calendar: true,
  });

  const checkArea = () => {
    const currentArea = window.location.pathname.split('/')[2];
    setActiveArea(currentArea);
    switch (currentArea) {
      case 'accountsetting':
        setAreaSwitch({ account: true, teams: false, calendar: false });
        break;
      case 'userteam':
        setAreaSwitch({ account: false, teams: true, calendar: false });
        break;
      default:
        setAreaSwitch({ account: false, teams: false, calendar: true });
    }
  };

  useEffect(() => {
    checkArea();

    window.addEventListener('popstate', function () {
      checkArea();
    });
    window.addEventListener('replaceState', function () {
      checkArea();
    });
    window.addEventListener('pushState', function () {
      checkArea();
    });

    return function cleanup() {
      window.removeEventListener('popstate', function () {
        checkArea();
      });
      window.removeEventListener('replaceState', function () {
        checkArea();
      });
      window.removeEventListener('pushState', function () {
        checkArea();
      });
    };
  }, []);

  return (
    <Wrap>
      {/* {!isSigned ? (
        <div>請先登入會員</div>
      ) : ( */}
      <>
        <BtnWrap>
          <Link to={`${url}/accountsetting`}>
            <AreaBtn show={AreaSwitch.account}>Account</AreaBtn>
          </Link>
          <Link to={`${url}/userteam`}>
            <AreaBtn show={AreaSwitch.teams}>Team</AreaBtn>
          </Link>
          <Link to={`${url}/calendar`}>
            <AreaBtn show={AreaSwitch.calendar}>Tour Calendar</AreaBtn>
          </Link>
        </BtnWrap>

        <Switch>
          <Route exact path={`${path}/accountsetting`}>
            <AccountSetting
              user={user}
              userToken={userToken}
              userEmail={userEmail}
              userBirth={userBirth}
            />
          </Route>

          <Route exact path={`${path}/userteam`}>
            <TeamsSetting userToken={userToken} userTeam={userTeam} />
          </Route>

          <Route>
            <Calendar
              path={`${path}`}
              userToken={userToken}
              userTour={userTour}
              isSigned={isSigned}
            />
          </Route>
        </Switch>
      </>

      {/* )} */}
    </Wrap>
  );
};

export default Member;
