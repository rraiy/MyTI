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
  background: transparent
    linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%)
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
  position: fixed;
  top: 48%;
  left: 8%;
  width: 160px;
  height: 280px;

  .noPick {
    font-size: 22px;
  }

  .noPick:before {
    content: '';
    display: inline-block; // need debug why use ''
    width: 16px;
    border-radius: 50%;
    background-color: ${fontGrey};
    margin-right: 20px;
    height: 16px;
  }
`;
export const StateLi = styled.li`
  color: ${(props) => (props.show ? fontYellow : fontGrey)};

  :before {
    content: '';
    display: inline-block;
    width: ${(props) => (props.show ? '20px' : '16px')};
    border-radius: 50%;
    background-color: ${(props) => (props.show ? fontYellow : fontGrey)};
    margin-right: 20px;
    height: ${(props) => (props.show ? '20px' : '16px')};
  }

  a {
    color: ${(props) => (props.show ? fontYellow : fontGrey)};
    font-size: ${(props) => (props.show ? '24px' : '20px')};
  }
`;

export const OngoingWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  scroll-margin-top: 100px;
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
  color: ${fontGrey};

  div img {
    width: 30px;
  }

  .favorite {
    background: yellow;
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
  scroll-margin-top: 100px;
`;

export const RecentWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  scroll-margin-top: 100px;
`;

export const FavoriteBtn = styled.button`
  img {
    width: 30px;
  }
`;

export const AllTourInfoDiv = styled.div`
  width: 80%;
  margin-bottom: 80px;
  h3 {
    font-size: 28px;
    color: #fff;
    margin-bottom: 32px;
  }
  p {
    color: ${fontGrey};
    padding: 20px 24px;
    line-height: 1.5em;
  }
`;

export const InfoTextDiv = styled.div`
  border: 1px solid ${primary};
`;
