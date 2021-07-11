// TeamsSetting.js

import React from 'react';
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
} from './css/TeamsSettingSty';
import starI from '../../../images/icon/star.png';
import TeamLogo from '../../../images/team_logo/LGDM.png';

const TeamsSetting = () => {
    const renderTeamItems = () => {
        const arr = [];
        for (let i = 1; i < 17; i += 1) {
            arr.push(
                <TeamItemWrapLi>
                    <p>PSG.LGD</p>
                    <hr />
                    <MemberTeamLogo src={TeamLogo} alt="" />
                </TeamItemWrapLi>,
            );
        }
        return arr;
    };

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
                    {renderTeamItems()}
                    {/* <p>PSG.LGD</p>
                        <hr />
                        <MemberTeamLogo src={TeamLogo} alt="" /> */}
                </AllTeamUL>
            </SelectTeamWrap>
        </TeamsSettingWrap>
    );
};

export default TeamsSetting;
