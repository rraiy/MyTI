import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LOGO from '../../../images/team_logo/LGDM.png';
import Elephant from '../../../images/team_logo/Elephant_M.png'
import {primary, fontGrey, fontWhite, fontWaring} from '../../../public_component/globalStyle';
import db from '../../../firebase/firestore';

const Wrap = styled.div`
    width:100%;
    color:#fff;
    margin-bottom: 152px;
    font-size:24px;
`

const BattleDiv = styled.div`
    display:flex;
    width:960px;
    margin:0 auto;
    margin-bottom:50px;
    justify-content:space-around;
    align-items:center;
    margin-bottom:100px;
    

`
const TeamDiv = styled.div`
    width:240px;
    height:300px;
    
    background:${props=>props.team === 'team_1' ? '#0027FF22':'#BC459334' }
    
    ;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;

    h3{
        color:${fontGrey}
    }
    
`

const TeamLogoDiv = styled.div`
    height:198px;
    line-height:198px;
`

const TeamLogo = styled.img`
    width:150px;
    vertical-align:middle;
    object-fit:contain;
`


const IntroDiv = styled.div`
    width:200px;
    // text-align:center;
`

const IntroUl = styled.ul`
    color:rgba(173, 173, 173, 1);
    display:flex;
    flex-direction:column;
    align-items:center;

    li{
        margin-bottom:28px;
    }

    .live{
        width:80px;
        color:yellow;
        border:1px solid yellow;
        border-radius:5px;
        padding:8px;
        display:flex;
        font-size:16px;

    }

    .live:before{
        content:'';
        display:'inline-block';
        width:15px;
        border-radius:7.5px;
        background-color:red;
        margin-right:8px;
    }
    
`

const VoteBtn = styled.button`
    width:80px;
    padding:4px 8px;
    color:${props=>props.team === 'team_1' ? '#2445FF':'#BC4593' };
    border:1px solid ${props=>props.team === 'team_1' ? '#2445FF':'#BC4593' };
    border-radius:16px;
    cursor:pointer;

    :hover{
        color:#fff;
        background:${props=>props.team === 'team_1' ? '#2445FF':'#BC4593' };
        border:1px solid ${props=>props.team === 'team_1' ? '#2445FF':'#BC4593' };
        transform:scale(1.2);
        
    }
`

const RateDiv = styled.div`
    width:960px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:rgba(173, 173, 173, 1);
    p{
        font-size:20px;
        margin-bottom:16px
    }
`

const VoteRateDiv = styled.div`
    width:700px;
    height:30px;
    position:relative;
`

const VoteRateT1 = styled.span`
    font-size:20px;
    padding:5px;
    width:${props=> props.rate};
    background:rgb(0,39,255);
    position:absolute;
    text-align:right;
    left:0;
    border-radius:16px 0 0 16px;
`

const VoteRateT2 = styled.span`
    font-size:20px;
    padding:5px 10px;
    width:${props=> props.rate};
    background:rgb(188,69,147);
    position:absolute;
    text-align:left;
    right:0;
    border-radius:0 16px 16px 0;
`

const Battle = () => {
    const [team1Rate,setTeam1Rate] = useState('50%');
    const [team2Rate,setTeam2Rate] = useState('50%');

    const dbVoteRatePath = 'live_game/WePlay_0614_PSGLGD';


    const countingRate = (team1, team2) => {
        let team1Rating = Math.round((team1/(team1+team2))*10000)/100
        setTeam1Rate(team1Rating+'%')
        setTeam2Rate((100-team1Rating)+'%')
    }

    const getTeamVote = ()=> {
            let team1Count=0;
            let team2Count=0;
            db.collection('live_game').doc('WePlay_0614_PSGLGD').get()
            .then(res => {
                team1Count = res.data().fans_rate.team_1_count;
                team2Count = res.data().fans_rate.team_2_count;
                team1Count && team2Count ? countingRate(team1Count, team2Count):null
            })
    }

    // first render then run
    useEffect(
        ()=>{
            
            getTeamVote();
    
            const listenVote =  db.collection('live_game').where('title_en','==','WePlay AniMajor')
            .onSnapshot(res=>{
                res.docChanges().forEach(change=> {
                    if(change.type === 'modified'){
                        getTeamVote();
                    }
                })
            })

            return () => {
                listenVote.unsubscribe()
            }

    },[])


    return(
        <Wrap>
            <BattleDiv>
                <TeamDiv team='team_1'>
                    <h3>PSG.LGD</h3>
                    <TeamLogoDiv>
                        <TeamLogo src={LOGO} alt="" />
                    </TeamLogoDiv>
                    <VoteBtn team='team_1'>Voting !</VoteBtn>
                </TeamDiv>
                <IntroDiv>
                    <IntroUl>
                        <li>BO3</li>
                        <li>2020-09-09</li>
                        <li>19:00</li>
                        <li className="live">LIVE</li>
                    </IntroUl>
                </IntroDiv>
                <TeamDiv team='team_2'>
                    <h3>ELEPHANT</h3>
                    <TeamLogoDiv>
                        <TeamLogo src={Elephant} alt="" />
                    </TeamLogoDiv>
                    <VoteBtn team='team_2'>Voting !</VoteBtn>
                </TeamDiv>
            </BattleDiv>

            <RateDiv>
                <p>Fans Vote</p>
                <VoteRateDiv>
                    <VoteRateT1 rate={team1Rate}>{team1Rate}</VoteRateT1>
                    <VoteRateT2 rate={team2Rate}>{team2Rate}</VoteRateT2>
                </VoteRateDiv>
            </RateDiv>
        </Wrap>
    )
}

export default Battle;