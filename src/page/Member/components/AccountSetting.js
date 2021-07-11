import React, { useState } from 'react';
import { db } from '../../../firebase/firestore';
import { AccountWrap, H1, TitleDiv, Li, UL, EditDiv, Input, Button } from './css/AccountSettingSty';
import MiniI from '../../../images/icon/minimize.png';

const AccountSetting = ({ user, userToken, userEmail, userBirth }) => {
    // const [username, setUsername] = useState(user);
    // const [email, setEmail] = useState('raiy@gmail'); // not allow user to change
    // const [password, setPassword] = useState('5566');
    // const [birthday, setBirthday] =useState('2020-01-01');

    const [activeItem, setActiveItem] = useState([]);

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newBirthday, setNewBirthday] = useState('');

    const AccountSettingItems = [
        {
            title: 'Username',
            value: user,
        },
        {
            title: 'Email Address',
            value: userEmail,
        },
        {
            title: 'Password',
            value: '****',
        },
        {
            title: 'Birthday',
            value: userBirth,
        },
    ];

    const openEdit = (item) => {
        if (activeItem.includes(item)) {
            const hideItem = activeItem.filter((active) => active !== item);
            setActiveItem(hideItem);
        } else {
            setActiveItem([...activeItem, item]);
        }
    };

    const handleInputChange = (newValue, title) => {
        switch (title) {
            case 'Username':
                setNewUsername(newValue);
                break;
            case 'Password':
                setNewPassword(newValue);
                break;
            case 'Birthday':
                setNewBirthday(newValue);
                break;
            default:
        }
    };

    const onCancelValue = (title) => {
        switch (title) {
            case 'Username':
                setNewUsername('');
                break;
            case 'Password':
                setNewPassword('');
                break;
            case 'Birthday':
                setNewBirthday('');
                break;
            default:
        }
    };

    const onSaveValue = (title) => {
        if (title === 'Username') {
            db.collection('member')
                .doc(userToken)
                .update({ username: newUsername })
                .then(() => setNewUsername(''))
                .catch((err) => console.log(err));
        } else if (title === 'Birthday') {
            db.collection('member')
                .doc(userToken)
                .update({ user_birth: newBirthday })
                .then(() => setNewBirthday(''))
                .catch((err) => console.log(err));
        }

        switch (title) {
            case 'Username':
                setNewUsername(newUsername);
                break;
            case 'Password':
                setNewPassword(newPassword);
                break;
            case 'Birthday':
                setNewBirthday(newBirthday);
                break;
            default:
        }
    };

    const renderItem = AccountSettingItems.map((item) => {
        const active = activeItem.includes(item.title) ? 'active' : '';
        return (
            <Li key={item.title}>
                {item.title === 'Email Address' ? null : (
                    <button type="button" onClick={() => openEdit(item.title)}>
                        <img src={MiniI} alt="edit" />
                    </button>
                )}

                <TitleDiv>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                </TitleDiv>
                <EditDiv className={`edit ${active}`}>
                    <p>Update your {item.title}:</p>
                    <Input
                        type="text"
                        id={item.title}
                        onChange={(e) => handleInputChange(e.target.value, e.target.id)}
                        value={
                            // eslint-disable-next-line no-nested-ternary
                            item.title === 'Username'
                                ? newUsername
                                : item.title === 'Password'
                                ? newPassword
                                : newBirthday
                        }
                    />
                    <Button
                        className="save"
                        id={item.title}
                        onClick={(e) => onSaveValue(e.target.id)}
                    >
                        Save
                    </Button>
                    <Button
                        className="cancel"
                        id={item.title}
                        onClick={(e) => onCancelValue(e.target.id)}
                    >
                        Cancel
                    </Button>
                </EditDiv>
            </Li>
        );
    });

    return (
        <AccountWrap>
            <H1>Account Settings</H1>
            <UL>{renderItem}</UL>
        </AccountWrap>
    );
};

export default AccountSetting;
