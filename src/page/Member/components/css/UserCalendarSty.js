import styled from 'styled-components';
import {primary, secondary, fontGrey, fontWhite, fontWaring, fontYellow} from '../../../../public_component/globalStyle';

const borderColor = 'rgba(168,73,237,0.27)'

export const UserCalendarWrap = styled.div`
    width:900px;
    background:#231D40;
    padding:12px;
`

export const SelectMonthDiv = styled.div`
    margin-bottom:16px;
    display:flex;
    align-items:center;

    button{
        margin-right:12px;
    }
`

export const MonthBtn = styled.button`
    color:${fontWhite};
    background:#282B58;
    width:80px;
    height:40px;
`


export const TodayBtn = styled.button`
    color:${fontWhite};
    background:#282B58;
    width:80px;
    height:40px;
`


export const DayUl = styled.ul`
display:flex;
width:100%;
list-style: none;
color:${primary};
font-weight:bold;

li{
    width:99%;
    border:1px solid ${borderColor};
    border-right:none;
    text-align:center;
    padding:8px 16px;
}

li:nth-last-child(1){
    border-right:1px solid ${borderColor};
}

`

export const AllRowsUl = styled.ul`
display:flex;
flex-direction:column;
list-style: none;
width:100%;

li{
    list-style: none;
    
    overflow:hidden;
}
`

export const RowsWrap = styled.ul`
display:flex;
li{
    width:99%;
    height:100px;
    text-align:center;
    border:1px solid ${borderColor};
    border-right:none;
    border-top:none;
}

li:nth-last-child(1){
    border-right:1px solid ${borderColor};
}

p{
    text-align:right;
    padding:4px;
}
`
