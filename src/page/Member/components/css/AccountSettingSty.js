import styled from 'styled-components';
import {primary, secondary, fontGrey, fontWhite, fontWaring, fontYellow} from '../../../../public_component/globalStyle';

export const AccountWrap = styled.div`
    width:952px;
    border:1px solid ${primary};
    border-radius:5px;
    background:#1F1D33;
`

export const UL = styled.ul`
    padding:0px 80px;
    
`

export const Li = styled.li`
    position:relative;
    border-bottom:1px solid ${secondary};
    margin-bottom:30px;

    img{
        width:20px;
        position:absolute;
        right:80px;
        cursor:pointer;
    }

    .edit{
        display:none;
    }

    .active{
        display:block;
    }
`

export const H1 = styled.h1`
    font-size:24px;
    height:60px;
    background:#464B86;
    text-align:center;
    line-height:60px;
    border-radius:5px 5px 0 0;
    margin-bottom:30px;
`

export const TitleDiv = styled.div`

    h3{
        font-size:16px;
        color:${primary};
        margin-bottom:20px;
    }

    p{
        font-size:20px;
        color:#DCACFF;
        margin-bottom:20px;
    }
    
`

export const EditDiv = styled.div`
    margin-bottom:16px;

    p{  
        font-size:14px;
        margin-bottom:20px;
    }
`

export const Input = styled.input`
    height:28px;
    margin-right:20px;
`

export const Button = styled.button`
    width:60px;
    height:28px;
    margin-right:10px;
    border:1px solid ${props=>props.className === 'save'? 'none':primary};
    background:${props=>props.className === 'save'? primary:null};
    color:${props=>props.className === 'save'? '#fff':primary}; 
`