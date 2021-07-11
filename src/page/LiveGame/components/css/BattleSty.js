import styled from 'styled-components';
import {primary, fontGrey, fontWhite, fontWaring} from '../../../../public_component/globalStyle';

export const Wrap = styled.div`
    width:100%;
    color:#fff;
    margin-bottom: 152px;
    font-size:24px;
    position:relative;
    

    @media (max-width:1199px) and {
        min-width:700px;
        margin-bottom:150px;
        
    }

    @media (max-width:700px) and (min-width:360px){
        // height:100px;
        margin-bottom:30px;

    }
`

export const BattleDiv = styled.div`
    display:flex;
    width:100%;
    margin:0 auto;
    margin-bottom:50px;
    justify-content:space-around;
    align-items:center;
    margin-bottom:100px;
    background:#A849ED19;
    padding:20px 10%;

    @media (max-width:1199px) {
    }

    @media (max-width:700px) and (min-width:360px){
        width:98%;
        margin-bottom:20px;
    }

`

export const BattleBG = styled.div`
    // position:absolute;
    // background:#A849ED19;
    // width:100%;
    // height:368px;
    // top:-30px;
`

export const TeamDiv = styled.div`
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
        height:60px;
        padding:8px;
        text-align:center;
        justify-content:center;
        flex-flow:row wrap;
        h3{
            font-size:14px;
            
        }

    }
`

export const TeamLogoDiv = styled.div`
    height:198px;
    line-height:198px;
    @media (max-width:699px) and (min-width:360px){
        display:none;
        height:auto;
        line-height:0;

    }
`

export const TeamLogo = styled.img`
    width:150px;
    vertical-align:middle;
    object-fit:contain;

    @media (max-width:699px) and (min-width:360px){
        width:20px;

    }
`

export const IntroDiv = styled.div`
    width:200px;
    
    @media (max-width:699px) and (min-width:360px){
        width:92px;
        height:44px;
    }
`

export const IntroUl = styled.ul`
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
        display:'inline-block'; // need debug why use ''
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

export const VoteBtn = styled.button`
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
        width:60px;
        height:20px;
        font-size:8px;

    }
`

export const RateDiv = styled.div`
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
        p{
            font-size:14px;
        }

    }
`

export const VoteRateDiv = styled.div`
    width:600px;
    height:30px;
    position:relative;

    @media (max-width:699px) {
        width:100%;
        height:20px
        
    }
`

export const VoteRateT1 = styled.span`
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

export const VoteRateT2 = styled.span`
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