import styled from 'styled-components';
import { primary, fontGrey, fontWhite, fontYellow } from '../../../public_component/globalStyle';

export const markWidth = '9%';
export const dateWidth = '25%';
export const tourLogoWidth = '18%';
export const tourTitleWidth = '40%';
export const locationWidth = '18%';
export const infoWidth = '10%';

export const Wrap = styled.div`
    min-width: 1200px;
    height: 1800px;
    background: transparent
        linear-gradient(
            180deg,
            rgba(7, 0, 28, 1) 0%,
            rgba(24, 15, 51, 1) 34%,
            rgba(58, 45, 96, 1) 100%
        )
        0% 0% no-repeat padding-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;

    @media (max-width: 1199px) {
        min-width: 700px;
    }

    @media (max-width: 699px) and (min-width: 360px) {
        min-width: 360px;
    }
`;

export const StateUL = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${fontGrey};
    position: fixed;
    top: 20%;
    left: 8%;
    width: 160px;
    height: 320px;

    .pick {
        color: ${fontYellow};
        font-size: 24px;
    }

    .pick:before {
        content: '';
        display: inline-block; // need debug why use ''
        width: 24px;
        border-radius: 12px;
        background-color: ${fontYellow};
        margin-right: 20px;
        height: 24px;
    }

    .noPick {
        font-size: 22px;
    }

    .noPick:before {
        content: '';
        display: inline-block; // need debug why use ''
        width: 18px;
        border-radius: 8px;
        background-color: ${fontGrey};
        margin-right: 20px;
        height: 18px;
    }
`;
export const StateLi = styled.li``;

export const OngoingWrap = styled.div`
    margin-top: 20px;
    margin-bottom: 80px;
`;

export const H2 = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: ${fontWhite};
    margin-bottom: 20px;
    margin-left: 14%;

    :before {
        content: ' 1'; // need debug why need to use word
        color: ${primary};
        display: inline;
        width: 8px;
        background-color: ${primary};
        margin-right: 20px;
    }
`;

export const BoardDiv = styled.div`
    width: 928px;
    height: 430px;
    background: rgb(43, 51, 96);
    border: 2px solid rgb(168, 73, 237);
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 14%;
`;

export const TitleDiv = styled.div`
    height: 60px;
    background: rgb(70, 75, 134);
    border-bottom: 2px solid rgb(168, 73, 237);
    border-radius: 8px 8px 0 0;
    color: #fff;
    padding: 8px 16px;

    ul:first-child {
        height: 100%;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export const TourListUL = styled.ul`
    display: flex;
    flex-direction: column;
    color: #fff;
`;

export const TourLi = styled.li`
    display: flex;
    flex-direction: row;
    height: 64px;
    padding: 8px 16px;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    div img {
        width: 30px;
    }

    // 收藏
    div:nth-child(1) {
        width: ${markWidth};
    }

    // date
    span:nth-child(2) {
        width: ${dateWidth};
    }

    div:nth-child(3) {
        width: ${tourLogoWidth};
    }

    span:nth-child(4) {
        width: ${tourTitleWidth};
        line-height: 1.2em;
    }

    span:nth-child(5) {
        width: ${locationWidth};
    }

    div:nth-child(6) {
        width: ${infoWidth};
    }
`;

export const UpcomingWrap = styled.div`
    margin-top: 20px;
    margin-bottom: 80px;
`;
