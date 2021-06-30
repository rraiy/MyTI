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
    position:relative;
    background:#A849ED19;
    padding:20px;

    @media (max-width:1199px) and (min-width:700px){
        min-width:700px;
        margin-bottom:150px;
        
    }

    @media (max-width:699px) and (min-width:360px){
        height:100px;
        margin-bottom:30px;

    }
`

const BattleDiv = styled.div`
    display:flex;
    width:960px;
    margin:0 auto;
    margin-bottom:50px;
    justify-content:space-around;
    align-items:center;
    margin-bottom:100px;

    @media (max-width:1199px) {
        width:95%;
    }

    @media (max-width:699px) and (min-width:360px){
        width:98%;

    }

`

const BattleBG = styled.div`
    // position:absolute;
    // background:#A849ED19;
    // width:100%;
    // height:368px;
    // top:-30px;
`

const TeamDiv = styled.div`
    width:240px;
    height:300px;
    
    background:${props=>props.team === 'team_1' ? '#0027FF22':'#BC459334' };
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;

    h3{
        color:${fontGrey}
    }
    
    @media (max-width:1199px) and (min-width:700px){
        width:200px;
    }

    @media (max-width:699px) and (min-width:360px){
        width:100px;
        height:28px;
        flex-flow:row wrap;
        h3{
            font-size:10px;
            
        }

    }
`

const TeamLogoDiv = styled.div`
    height:198px;
    line-height:198px;
    @media (max-width:699px) and (min-width:360px){
        height:auto;
        line-height:0;

    }
`

const TeamLogo = styled.img`
    width:150px;
    vertical-align:middle;
    object-fit:contain;

    @media (max-width:699px) and (min-width:360px){
        width:20px;

    }
`

const IntroDiv = styled.div`
    width:200px;
    
    @media (max-width:699px) and (min-width:360px){
        width:92px;
        height:44px;
    }
`

const IntroUl = styled.ul`
    color:rgba(173, 173, 173, 1);
    display:flex;
    flex-direction:column;
    align-items:center;
    height:300px;
    justify-content:flex-end;

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

    @media (max-width:699px) and (min-width:360px){
        width:100%;
        justify-content:flex-start;
        height:100%;
        
        li{
            font-size:10px;
            margin-bottom:8px;
        }

        li:last-child{
            display:none;
        }
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

    @media (max-width:699px) and (min-width:360px){
        width:40px;
        height:20px;
        font-size:8px;

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

    @media (max-width:1199px){
        width:600px;
    }

    @media (max-width:699px) {
        width:98%;

    }
`

const VoteRateDiv = styled.div`
    width:600px;
    height:30px;
    position:relative;

    @media (max-width:699px) {
        width:100%;
        height:20px
        
    }
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
    @media (max-width:699px) {
        font-size:12px;
    }
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
    @media (max-width:699px) {
        font-size:12px;
    }
`

const Battle = () => {
    const [team1Rate,setTeam1Rate] = useState({
        rate:'50%',
        count:0
    });
    const [team2Rate,setTeam2Rate] = useState({
        rate:'50%',
        count:0
    });

    const getTeamVoteCount = ()=> {
        db.collection('live_game').doc('WePlay_0614_PSGLGD').get()
        .then(res => {
            let team1Count = res.data().fans_rate.team_1_count;
            let team2Count = res.data().fans_rate.team_2_count;
            if(team1Count && team2Count){
                let team1Rating = Math.round((team1Count/(team1Count+team2Count))*10000)/100
                let team2Rating= Math.round((100-team1Rating)*100)/100
                console.log(team1Rating)
                setTeam1Rate({rate:team1Rating+'%', count:team1Count});
                setTeam2Rate({rate:team2Rating+'%', count:team2Count})
            }
        })
    }
    

    const onVoteTeam1 = (e) => {
        e.preventDefault();
        db.collection('live_game').doc('WePlay_0614_PSGLGD')
        .update(
            {
                'fans_rate.team_1_count':team1Rate.count+1
            }
        )
    }

    const onVoteTeam2 = e => {
        e.preventDefault();
        db.collection('live_game').doc('WePlay_0614_PSGLGD')
        .update(
            {
                'fans_rate.team_2_count':team2Rate.count+1
            }
        )
    }

    // first render then run
    useEffect(
        ()=>{

            getTeamVoteCount();
    
            const listenVoteDB =  db.collection('live_game').where('title_en','==','WePlay AniMajor')
            .onSnapshot(res=>{
                res.docChanges().forEach(change=> {
                    if(change.type === 'modified'){
                        getTeamVoteCount();
                    }
                })
            })

            return () => {
                listenVoteDB.unsubscribe()
            }
    },[])


    return(
        <Wrap>
            <BattleBG></BattleBG>
            <BattleDiv>
                <TeamDiv team='team_1'>
                    <h3>PSG.LGD</h3>
                    <TeamLogoDiv>
                        <TeamLogo src={LOGO} alt="" />
                    </TeamLogoDiv>
                    <VoteBtn onClick={onVoteTeam1} team='team_1'>Voting !</VoteBtn>
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
                    <VoteBtn onClick={onVoteTeam2}  team='team_2'>Voting !</VoteBtn>
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
    )
}

export default Battle;