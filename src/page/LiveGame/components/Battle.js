import React, { useState, useEffect } from 'react';
import LOGO from '../../../images/team_logo/LGDM.png';
import Elephant from '../../../images/team_logo/Elephant_M.png';
import { db } from '../../../firebase/firestore';
import {
    Wrap,
    BattleDiv,
    BattleBG,
    TeamDiv,
    TeamLogoDiv,
    TeamLogo,
    IntroDiv,
    IntroUl,
    VoteBtn,
    RateDiv,
    VoteRateDiv,
    VoteRateT1,
    VoteRateT2,
} from './css/BattleSty';

const Battle = ({ isSigned }) => {
    const [team1Rate, setTeam1Rate] = useState({
        rate: '50%',
        count: 0,
    });
    const [team2Rate, setTeam2Rate] = useState({
        rate: '50%',
        count: 0,
    });

    const getTeamVoteCount = () => {
        db.collection('live_game')
            .doc('WePlay_0614_PSGLGD')
            .get()
            .then((res) => {
                const team1Count = res.data().fans_rate.team_1_count;
                const team2Count = res.data().fans_rate.team_2_count;
                if (team1Count && team2Count) {
                    const team1Rating =
                        Math.round((team1Count / (team1Count + team2Count)) * 10000) / 100;
                    const team2Rating = Math.round((100 - team1Rating) * 100) / 100;
                    setTeam1Rate({ rate: `${team1Rating}%`, count: team1Count });
                    setTeam2Rate({ rate: `${team2Rating}%`, count: team2Count });
                }
            });
    };

    const onVoteTeam1 = (e) => {
        e.preventDefault();
        db.collection('live_game')
            .doc('WePlay_0614_PSGLGD')
            .update({
                'fans_rate.team_1_count': team1Rate.count + 1,
            });
    };

    const onVoteTeam2 = (e) => {
        e.preventDefault();
        db.collection('live_game')
            .doc('WePlay_0614_PSGLGD')
            .update({
                'fans_rate.team_2_count': team2Rate.count + 1,
            });
    };

    useEffect(() => {
        getTeamVoteCount();

        const unsubscribe = db
            .collection('live_game')
            .where('title_en', '==', 'WePlay AniMajor')
            .onSnapshot((res) => {
                res.docChanges().forEach((change) => {
                    if (change.type === 'modified') {
                        getTeamVoteCount();
                    }
                });
            });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Wrap>
            <BattleBG />
            <BattleDiv>
                <TeamDiv team="team_1">
                    <h3>PSG.LGD</h3>
                    <TeamLogoDiv>
                        <TeamLogo src={LOGO} alt="" />
                    </TeamLogoDiv>
                    {isSigned === false ? (
                        <VoteBtn disabled>Sign in first</VoteBtn>
                    ) : (
                        <VoteBtn onClick={onVoteTeam1} team="team_1">
                            Voting !
                        </VoteBtn>
                    )}
                </TeamDiv>
                <IntroDiv>
                    <IntroUl>
                        <li>BO3</li>
                        <li>2020-09-09</li>
                        <li>19:00</li>
                        <li className="live">LIVE</li>
                    </IntroUl>
                </IntroDiv>
                <TeamDiv team="team_2">
                    <h3>ELEPHANT</h3>
                    <TeamLogoDiv>
                        <TeamLogo src={Elephant} alt="" />
                    </TeamLogoDiv>
                    {isSigned === false ? ( // bug
                        <VoteBtn disabled>Sign in first</VoteBtn>
                    ) : (
                        <VoteBtn onClick={onVoteTeam2} team="team_2">
                            Voting !
                        </VoteBtn>
                    )}
                </TeamDiv>
            </BattleDiv>

            <RateDiv>
                <p>Fans Vote</p>
                <VoteRateDiv>
                    <VoteRateT1 rate={team1Rate.rate}>{team1Rate.rate}</VoteRateT1>
                    <VoteRateT2 rate={team2Rate.rate}>{team2Rate.rate}</VoteRateT2>
                </VoteRateDiv>
            </RateDiv>
        </Wrap>
    );
};

export default Battle;
