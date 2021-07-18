// TeamsSetting.js

import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/firestore';
import {
  TeamsSettingWrap,
  FavoriteWrap,
  StarI,
  IconWrap,
  MemberTeamLogo,
  AllTeamUL,
  TeamItemWrapLi,
  SearchTeamInput,
  SelectTeamWrap,
  PickBtn,
} from './css/TeamsSettingSty';
import starI from '../../../images/icon/star.png';
import TeamLogo from '../../../images/team_logo/LGDM.png';

const TeamsSetting = ({ userToken, userTeam }) => {
  const [teamItems, setTeamItems] = useState(null);
  const [changeInput, setChangeInput] = useState('');
  const [debouncedInputText, setDebouncedInputText] = useState(changeInput);

  /* {
        team:'',
        logo:'',
    } */

  const handleChangeInput = (text) => {
    setChangeInput(text);
  };

  const changeTeam = (e, newTeam) => {
    db.collection('member').doc(userToken).update({
      user_team: newTeam,
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
      <FavoriteWrap>
        <h2>My favorite team</h2>
        <IconWrap>
          <StarI src={starI} alt="" />
          <MemberTeamLogo src={TeamLogo} alt="" />
          <p>{userTeam}</p>
        </IconWrap>
      </FavoriteWrap>

      <SelectTeamWrap>
        <p>Pick the ONE team you go to bat for. </p>
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
                  <MemberTeamLogo src={TeamLogo} alt="" />
                  <PickBtn type="button" onClick={(e) => changeTeam(e, item.team)}>
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
