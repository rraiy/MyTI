import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Calendar from './components/Calendar_Module';
import AccountSetting from './components/AccountSetting';
import TeamsSetting from './components/TeamsSetting';
import UserCalendar from './components/UserCalendar';
import {Wrap} from '../../public_component/globalStyle' ;

const Member = ({isSigned, user, userToken, userEmail, userTeam, userTour, userBirth}) => {

    console.log('Member', userToken) ;


    return(
        <Router>
            <Wrap>
                {
                    !isSigned ? <div>請先登入會員</div>:
                    <>
                        <div>
                            <Link to="/member">Account</Link>
                            <Link to="/member/userteam">Team</Link>
                            <Link href="/member/calendar">Tour Calendar</Link>
                        </div>
                        <Switch>
                            <Route exact path="/member">
                                <AccountSetting user={user} userToken={userToken} userEmail={userEmail} userBirth={userBirth}/>
                            </Route>

                            <Route path="/member/userteam">
                                <TeamsSetting  userToken={userToken} userTeam={userTeam}/>
                            </Route>

                            <Route>
                                <UserCalendar path="/member/calendar" userToken={userTour}/>
                            </Route>
                        </Switch>
                    </>

                }
                
            </Wrap>
        </Router>
    )
}

export default Member;