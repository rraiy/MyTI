import React from 'react';
import Calendar from './components/Calendar_Module';
import AccountSetting from './components/AccountSetting';
import {Wrap} from '../../public_component/globalStyle' ;

const Member = ({isSigned, user, userToken}) => {

    


    return(
        <Wrap>
            {
                !isSigned ? <div>請先登入會員</div>:
                <AccountSetting user={user} userToken={userToken}/>
            }
            
        </Wrap>
    )
}

export default Member;