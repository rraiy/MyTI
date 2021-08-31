// TeamsSetting.js

import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/firestore';
import {
  TeamsSettingWrap,
  FavoriteWrap,
  StarI,
  IconWrap,
  UserTeamLogoImg,
  UserTeamLogoDiv,
  AllTeamUL,
  TeamItemWrapLi,
  SearchTeamInput,
  SelectTeamWrap,
  PickBtn,
  NoSelectP,
  RemoveLayer,
} from './css/TeamsSettingSty';
import starI from '../../../images/icon/star.png';

const TeamsSetting = ({ userToken, userTeam, userTeamLogo }) => {
  const [teamItems, setTeamItems] = useState(null);
  const [changeInput, setChangeInput] = useState('');
  const [debouncedInputText, setDebouncedInputText] = useState(changeInput);

  const handleChangeInput = (text) => {
    setChangeInput(text);
  };

  const changeTeam = (e, newTeam, newLogo) => {
    db.collection('member').doc(userToken).update({
      user_team: newTeam,
      user_team_logo: newLogo,
    });
  };

  const handleRemoveFavorite = () => {
    db.collection('member').doc(userToken).update({
      user_team: '',
      user_team_logo: '',
    });
  };

  useEffect(() => {
    const arr = [];
    db.collection('favorite_team')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          arr.push({
            team: doc.data().team,
            logo: doc.data().team_logo,
          });
        });
      })
      .then(() => setTeamItems(arr));
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedInputText(changeInput);
    }, 1000);

    return () => [clearTimeout(timerId)];
  }, [changeInput]);

  useEffect(() => {
    // bug with case insensitive
    const filterArr = [];
    db.collection('favorite_team')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          if (doc.data().team.includes(debouncedInputText)) {
            filterArr.push({
              team: doc.data().team,
              logo: doc.data().team_logo,
            });
          }
        });
      })
      .then(() => setTeamItems(filterArr));
  }, [debouncedInputText]);

  return (
    <TeamsSettingWrap>
      {!userTeam ? (
        <FavoriteWrap>
          <h2>My favorite team</h2>
          <IconWrap>
            <NoSelectP>No team have been select yet.</NoSelectP>
          </IconWrap>
        </FavoriteWrap>
      ) : (
        <FavoriteWrap>
          <h2>My favorite team</h2>
          <IconWrap>
            <RemoveLayer onClick={() => handleRemoveFavorite(userTeam)}>Delete</RemoveLayer>
            <StarI src={starI} alt="favorite star" />
            <UserTeamLogoImg src={userTeamLogo} alt="" />
            <p>{userTeam}</p>
          </IconWrap>
        </FavoriteWrap>
      )}

      <SelectTeamWrap>
        <p>
          Pick the ONE team you go to bat for. The team will show when you sending message on Stream
          Page's Chat room.
        </p>
        <SearchTeamInput
          type="text"
          placeholder="Type team..."
          value={changeInput}
          onChange={(e) => handleChangeInput(e.target.value)}
        />

        <AllTeamUL>
          {!teamItems
            ? null
            : teamItems.map((item) => (
                <TeamItemWrapLi key={item.team}>
                  <p>{item.team}</p>
                  <hr />
                  <UserTeamLogoDiv>
                    <UserTeamLogoImg src={item.logo} alt="" />
                  </UserTeamLogoDiv>

                  <PickBtn type="button" onClick={(e) => changeTeam(e, item.team, item.logo)}>
                    Favorite
                  </PickBtn>
                </TeamItemWrapLi>
              ))}
        </AllTeamUL>
      </SelectTeamWrap>
    </TeamsSettingWrap>
  );
};

export default TeamsSetting;
