import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import AccountSetting from './components/AccountSetting';
import TeamsSetting from './components/TeamsSetting';
import Calendar from './components/UserCalendar';
import {Wrap} from '../../public_component/globalStyle' ;
import {AreaBtn,BtnWrap} from './components/css/MemberSty';


const Member = ({isSigned, user, userToken, userEmail, userTeam, userTour, userBirth}) => {

    const [AreaSwitch, setAreaSwitch] = useState({
        account:false,
        teams:false,
        calendar:true
    })

    const handleAreaClick = (area) => {
        switch(area){
            case 'account':setAreaSwitch({account:true,teams:false,calendar:false})
            break;
            case 'teams':setAreaSwitch({account:false,teams:true,calendar:false})
            break;
            case 'calendar':setAreaSwitch({account:false,teams:false,calendar:true})
        }
    }
    


    return(
        <Router>
            <Wrap>
                {
                    // !isSigned ? <div>請先登入會員</div>:
                    <>
                        <BtnWrap>
                            <Link  onClick={()=>handleAreaClick('account')} to="/member/accountsetting"><AreaBtn show={AreaSwitch.account}>Account</AreaBtn></Link>
                            <Link onClick={()=>handleAreaClick('teams')} to="/member/userteam"><AreaBtn show={AreaSwitch.teams}>Team</AreaBtn></Link>
                            <Link onClick={()=>handleAreaClick('calendar')} to="/member/calendar"><AreaBtn show={AreaSwitch.calendar}>Tour Calendar</AreaBtn></Link>
                        </BtnWrap>
                        <Switch>
                            

                            <Route exact path="/member/accountsetting">
                                <AccountSetting user={user} userToken={userToken} userEmail={userEmail} userBirth={userBirth}/>
                            </Route>

                            <Route exact path="/member/userteam">
                                <TeamsSetting  userToken={userToken} userTeam={userTeam}/>
                            </Route>
                            
                            <Route>
                                <Calendar path="/member/calendar" userToken={userToken} userTour={userTour}/>
                            </Route>
                        </Switch>
                    </>

                }
                
            </Wrap>
        </Router>
    )
}

export default Member;