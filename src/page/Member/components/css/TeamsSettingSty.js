import styled from 'styled-components';
import {primary, secondary, fontGrey, fontWhite, fontWaring, fontYellow} from '../../../../public_component/globalStyle';

export const TeamsSettingWrap = styled.div`
    width:952px;
    // display:flex;
    // justify-content:space-around;
    // align-items:center;

    
`

export const FavoriteWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-bottom:40px;

    h2{
        font-size:24px;
    }
`

export const StarI = styled.img`
    width:28px;
    margin-bottom:20px;
`

export const IconWrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const MemberTeamLogo  = styled.img`
    width:120px;
`

export const  SelectTeamWrap = styled.div`
    width:100%;

    p, input{
        margin-bottom:16px;
    }
`

export const AllTeamUL = styled.ul`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
`

export const TeamItemWrapLi = styled.li`
    width:176px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#262955;
    padding:20px 20px;
    margin-bottom:16px;

    p{
        margin-bottom:10px;
    }
    hr{
        width:176px;
        border:2px solid #07001C;
        margin-bottom:10px;
    }
`

export const SearchTeamInput = styled.input`
    width:240px;
    height:36px;

    
`