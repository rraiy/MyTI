import styled from 'styled-components';
import {primary, secondary, fontGrey, fontWhite, fontWaring, fontYellow} from '../../../../public_component/globalStyle';

export const BtnWrap = styled.div`
    width:820px;
    display:flex;
    justify-content:space-around;
    margin-bottom:60px;
`


export const AreaBtn = styled.button`
    color:${props=>props.show? fontWhite:primary};
    font-size:20px;
    border:1px solid ${primary};
    border-radius:5px;
    padding:8px 16px;
    background:${props=>props.show? primary:null};

`