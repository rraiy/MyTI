import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import {db} from '../../../firebase/firestore';
import {AccountWrap, H1, TitleDiv, Li, UL, EditDiv, Input, Button} from './css/AccountSettingSty';
import MiniI from '../../../images/icon/minimize.png';




const AccountSetting = ({user, userToken}) => {
    console.log('AS最頂')
    const [username, setUsername] = useState(user);
    const [email, setEmail] = useState('raiy@gmail');
    const [password, setPassword] = useState('5566');
    const [birthday, setBirthday] =useState('2020-01-01');

    const [activeItem, setActiveItem] = useState([]);

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newBirthday, setNewBirthday] =useState('');

    const AccountSettingItems = [
        {
            title:'Username',
            value:user
        },
        {
            title:'Email Address',
            value:email
        },
        {
            title:'Password',
            value:password
        },
        {
            title:'Birthday',
            value:birthday
        },
    ]

    const openEdit = (item) => {
        if(activeItem.includes(item)){
            const hideItem = activeItem.filter(active=> active !== item);
            setActiveItem(hideItem);
        }else{
            setActiveItem([...activeItem, item]);
        }
    }

    

    const renderItem = AccountSettingItems.map((item,index)=>{
        console.log('AS內容')
        const active = activeItem.includes(item.title) ? 'active':'';
        return(<Li key={item.title} >
            {
                item.title === 'Email Address' ? null:<img src={MiniI} alt="edit" onClick={()=>openEdit(item.title)}/>
            }
            
            <TitleDiv>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
            </TitleDiv>
            <EditDiv className={`edit ${active}`}>
                <p>Update your {item.title}:</p>
                <Input type="text"
                    onChange={e => handleInputChange(e.target.value, index)}
                    value={item.title === 'Username' ? newUsername: item.title === 'Password' ? newPassword:newBirthday}
                />
                <Button className='save' onClick={()=>onSaveValue(index)}>Save</Button>
                <Button className='cancel' onClick={()=>onCancelValue(index)}>Cancel</Button>
            </EditDiv>
            
        </Li>)
    });

    const handleInputChange = (newValue, index) => {
        switch(index){
            case 0: setNewUsername(newValue);
            break;
            case 2: setNewPassword(newValue);
            break;
            case 3: setNewBirthday(newValue);
        }
    }

    const onSaveValue = (index) => {
        switch(index){
            case 0: setUsername(newUsername);
            break;
            case 2: setPassword(newPassword);
            break;
            case 3: setBirthday(newBirthday);
        }
    }

    const onCancelValue = (index) => {
        switch(index){
            case 0: setNewUsername('');
            break;
            case 2: setNewPassword('');
            break;
            case 3: setNewBirthday('');
        }
    }

    console.log(userToken)

    useEffect(()=>{ // 一開始沒吃到userToken（為null） 所以[]的狀況執行不了
        if(userToken !== null){
            db.collection('member').doc(userToken).get()
            .then(res=>{
                console.log(res.data())
            })
        }
        
    },[])

    return(
        <AccountWrap>{console.log('AS return')}
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