import React from 'react';
import styled from 'styled-components';
import LOGO from '../../../images/team_logo/LGDM.png';
import Elephant from '../../../images/team_logo/Elephant_M.png'

const Wrap = styled.div`
    width:100%;
    color:#fff;
    margin-top:100px;
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
    width:200px;
    height:300px;
    background:rgba(0, 39, 255, 0.13);
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    
`

const LogoDiv = styled.div`
    width:140px;
    height:198px;
    
`

const TeamLogo = styled.img`
    width:100px;
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
        margin-bottom:20px;
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

const RateDiv = styled.div`
    width:960px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:rgba(173, 173, 173, 1);
    p{
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
                <TeamDiv>
                    <h3>PSG.LGD</h3>
                    <LogoDiv>
                        <TeamLogo src={LOGO} alt="" />
                    </LogoDiv>
                    <button>支持他</button>
                </TeamDiv>
                <IntroDiv>
                    <IntroUl>
                        <li>BO3</li>
                        <li>2020-09-09</li>
                        <li>19:00</li>
                        <li className="live">LIVE</li>
                    </IntroUl>
                </IntroDiv>
                <TeamDiv>
                    <h3>ELEPHANT</h3>
                    <LogoDiv>
                        <TeamLogo src={Elephant} alt="" />
                    </LogoDiv>
                    <button>支持他</button>
                </TeamDiv>
            </BattleDiv>

            <RateDiv>
                <p>支持度</p>
                <Rec>123</Rec>
            </RateDiv>
        </Wrap>
    )
}

export default Battle;