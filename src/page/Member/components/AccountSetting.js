import React, { useState } from 'react';
import { db } from '../../../firebase/firestore';
import { AccountWrap, H1, TitleDiv, Li, UL, EditDiv, Input, Button } from './css/AccountSettingSty';
import MiniI from '../../../images/icon/minimize.png';

const DEFAULT_NEWDATA = {
    username: '',
    password: '',
    birthday: '',
};

const AccountSetting = ({ user, userToken, userEmail, userBirth }) => {
    const [activeItem, setActiveItem] = useState([]);
    const [newUserData, setUserData] = useState(DEFAULT_NEWDATA);

    const AccountSettingItems = [
        {
            title: 'username',
            value: user,
        },
        {
            title: 'email Address',
            value: userEmail,
        },
        {
            title: 'password',
            value: '****',
        },
        {
            title: 'birthday',
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

    const handleInputChange = (title, newValue) => {
        setUserData({ ...newUserData, [title]: newValue });
    };

    const onCancelValue = (title) => {
        setUserData({ ...newUserData, [title]: '' });
    };

    const onSaveValue = (title) => {
        console.log(title, newUserData[`${title}`]);
        db.collection('member')
            .doc(userToken)
            .update({ [title]: newUserData[title] })
            .then(() => setUserData({ ...newUserData, [title]: '' }))
            .catch((err) => console.log(err));
    };

    const renderItem = AccountSettingItems.map((item) => {
        const active = activeItem.includes(item.title) ? 'active' : '';
        return (
            <Li key={item.title}>
                {item.title === 'email Address' ? null : (
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
                        onChange={(e) => handleInputChange(item.title, e.target.value)}
                        value={newUserData[item.title]}
                    />
                    <Button className="save" onClick={() => onSaveValue(item.title)}>
                        Save
                    </Button>
                    <Button className="cancel" onClick={() => onCancelValue(item.title)}>
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
