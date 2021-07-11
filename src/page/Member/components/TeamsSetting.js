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

const TeamsSetting = () => {
    const [teamItems, setTeamItems] = useState(null);
    /* {
        team:'',
        logo:'',
    } */

    // IIFE get team data from db
    (() => {
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
    })();

    return (
        <TeamsSettingWrap>
            <FavoriteWrap>
                <h2>My favorite team</h2>
                <IconWrap>
                    <StarI src={starI} alt="" />
                    <MemberTeamLogo src={TeamLogo} alt="" />
                </IconWrap>
            </FavoriteWrap>

            <SelectTeamWrap>
                <p>Pick the ONE team you go to bat for. </p>
                <SearchTeamInput type="text" placeholder="Type team..." />

                <AllTeamUL>
                    {!teamItems
                        ? null
                        : teamItems.map((item) => (
                              <TeamItemWrapLi>
                                  <p>{item.team}</p>
                                  <hr />
                                  <MemberTeamLogo src={TeamLogo} alt="" />
                                  <PickBtn type="button">Favorite</PickBtn>
                              </TeamItemWrapLi>
                          ))}
                </AllTeamUL>
            </SelectTeamWrap>
        </TeamsSettingWrap>
    );
};

export default TeamsSetting;
