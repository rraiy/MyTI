import styled from 'styled-components';
import {primary, secondary, fontGrey, fontWhite, fontWaring, fontYellow} from '../../../../public_component/globalStyle';

export const Button = styled.button`
width:100px;

border:1px solid yellow;
`
export const DayUl = styled.ul`
display:flex;
width:900px;
list-style: none;

li{
    width:99%;
    border:1px solid grey;
    text-align:center;
}
`

export const Ul = styled.ul`
display:flex;
flex-direction:column;
list-style: none;
width:900px;

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
    border:1px solid blue;
}
`