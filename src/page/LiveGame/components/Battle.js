import React from 'react';
import styled from 'styled-components';
import LOGO from '../../../images/team_logo/LGDM.png';
import Elephant from '../../../images/team_logo/Elephant_M.png'
import {primary, fontGrey, fontWhite, fontWaring} from '../../../public_component/globalStyle';

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

const Rec = styled.div`
    background:red;
    width:400px;
    height:30px;
`

const Battle = () => {

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
                <Rec>123</Rec>
            </RateDiv>
        </Wrap>
    )
}

export default Battle;