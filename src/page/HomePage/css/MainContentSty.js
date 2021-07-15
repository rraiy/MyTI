import styled from 'styled-components';
import { fontGrey } from '../../../public_component/globalStyle';

export const HotTourRankWrap = styled.div`
  width: 92%;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const HotTour = styled.div`
  width: 880px;
  background: #1f1d33;
`;

export const HotTourTitle = styled.div`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(to right, #423a71, #8720a0);
  height: 40px;

  margin-bottom: 40px;

  button {
    color: #fff;
    font-size: 16px;
  }
`;

export const RecentBtn = styled.button``;

export const ResultBtn = styled.button``;

export const HotTourWrap = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const HotTourItem = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 16px;

  img {
    width: 100%;
  }

  p {
    width: 100%;
    background: #383455;
    height: 40px;
    border-radius: 0 0 16px 16px;
    text-align: center;
    line-height: 40px;
  }
`;

export const Rank = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1f1d33;
`;

export const RankTitle = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: linear-gradient(to right, #423a71, #8720a0);
  margin-bottom: 20px;
`;

export const RankTextUl = styled.ul`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  li {
    font-size: 14px;
    color: ${fontGrey};
  }
`;

export const RankRowUl = styled.ul`
  width: 85%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #bc0d65;
  padding-bottom: 8px;
  margin-bottom: 12px;

  li {
    font-size: 14px;
    color: ${fontGrey};
  }
`;
