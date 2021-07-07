import React, {useState, useEffect} from 'react';
import {AccountWrap, H1, TitleDiv, Li, UL, EditDiv, Input, Button} from './css/AccountSettingSty';
import MiniI from '../../../images/icon/minimize.png'



const AccountSetting = ({user, userToken}) => {
    const [username, setUsername] = useState(user);
    const [email, setEmail] = useState('raiy@gmail');
    const [password, setPassword] = useState(null);
    const [birthday, setBirthday] =useState('2020-01-01');

    const AccountSettingItems = [
        {
            title:'Username',
            value:"Raiy"
        },
        {
            title:'Email Address',
            value:email
        },
        {
            title:'Password',
            value:'*********'
        },
        {
            title:'Birthday',
            value:birthday
        },
    ]


    const renderItem =AccountSettingItems.map(item=>{
        return(<Li key={item.title}>
            <img src={MiniI} alt="edit" />
            <TitleDiv>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
            </TitleDiv>
            <EditDiv>
                <p>Update your {item.title}:</p>
                <Input type="text" id={item.title} />
                <Button className='save'>Save</Button>
                <Button className='cancel'>Cancel</Button>
            </EditDiv>
            
        </Li>)
    })





    return(
        <AccountWrap>
            <H1>Account Settings</H1>
            <UL>
                {
                    renderItem
                }
            </UL>
        </AccountWrap>
    )
}

export default AccountSetting;