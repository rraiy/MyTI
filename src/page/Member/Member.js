import React, {useState, useEffect} from 'react';
import {Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import AccountSetting from './components/AccountSetting';
import TeamsSetting from './components/TeamsSetting';
import Calendar from './components/UserCalendar';
import {Wrap} from '../../public_component/globalStyle' ;
import {AreaBtn,BtnWrap} from './components/css/MemberSty';


const Member = ({isSigned, user, userToken, userEmail, userTeam, userTour, userBirth}) => {
    
    let {path, url} = useRouteMatch();

    const [AreaSwitch, setAreaSwitch] = useState({
        account:false,
        teams:false,
        calendar:true
    })

    const getUrlParam = () => {

    }

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
        
            <Wrap>
                {
                    // !isSigned ? <div>請先登入會員</div>:
                    <>
                        <BtnWrap>
                            <Link  onClick={()=>handleAreaClick('account')} to={`${url}/accountsetting`}>
                                <AreaBtn show={AreaSwitch.account}>Account</AreaBtn>
                            </Link>
                            <Link onClick={()=>handleAreaClick('teams')} to={`${url}/userteam`}>
                                <AreaBtn show={AreaSwitch.teams}>Team</AreaBtn>
                            </Link>
                            <Link onClick={()=>handleAreaClick('calendar')} to={`${url}/calendar`}>
                                <AreaBtn show={AreaSwitch.calendar}>Tour Calendar</AreaBtn>
                            </Link>
                        </BtnWrap>
                    
                        <Switch>
                            <Route exact path={`${path}/accountsetting`}>
                                <AccountSetting user={user} userToken={userToken} userEmail={userEmail} userBirth={userBirth}/>
                            </Route>

                            <Route exact path={`${path}/userteam`}>
                                <TeamsSetting  userToken={userToken} userTeam={userTeam}/>
                            </Route>
                            
                            <Route>
                                <Calendar path={`${path}`} userToken={userToken} userTour={userTour}/>
                            </Route>
                        </Switch>
                    
                    </>
                    
                }
                
            </Wrap>
        
    )
}

export default Member;