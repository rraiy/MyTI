import styled, { keyframes } from 'styled-components';
import { primary, fontGrey } from '../../../public_component/globalStyle';

export const HotTourRankWrap = styled.div`
  width: 92%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const TourAndResult = styled.div`
  width: 880px;
  background: #1f1d33;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const HotTourTitle = styled.div`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(to right, #423a71, #8720a0);
  height: 40px;
  position: relative;
  margin-bottom: 40px;

  button {
    color: #fff;
    font-size: 16px;
  }
`;

export const RecentBtn = styled.button``;

export const ResultBtn = styled.button``;

const tourLineTranslate = keyframes`
  
  transform: translate(200px,0);
  
`;

export const BtnBottomLine = styled.div`
  width: 100px;
  height: 4px;
  background: rgb(206, 22, 79);
  position: absolute;
  bottom: 0;
  left: 18%;
  transition: all 0.3s ease-in-out;

  transform: ${(props) => (props.show === 'hotEvents' ? '' : 'translateX(450%)')};
`;

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
  position: relative;
  cursor: pointer;
  overflow: hidden;

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

  .live:before {
    content: '';
    display: inline-block;
    background: #fff;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 4px;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const DateDiv = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  padding: 8px 12px;
  letter-spacing: 1px;
  background: rgba(198, 198, 198, 0.3);
`;

export const LiveDiv = styled.div`
  background: red;
  position: absolute;
  top: 24px;
  right: 0;
  padding: 4px 8px;
  opacity: 0.8;
`;

export const Rank = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1f1d33;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const RankTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(to right, #423a71, #8720a0);
  margin-bottom: 20px;
  position: relative;

  img {
    width: 20px;
    height: 20px;
    margin-left: 12px;
  }
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
  justify-content: flex-end;
  border-bottom: 1px solid rgba(188, 13, 101, 0.5);
  padding-bottom: 8px;
  margin-bottom: 20px;

  img {
    width: 16px;
  }

  li {
    width: 20%;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${fontGrey};
  }

  .team {
    width: 50%;
  }
`;

export const AllTourBtn = styled.button`
  color: ${fontGrey};
  background: rgba(255, 255, 255, 0.14);
  padding: 8px 20px;
  border-radius: 5px;
  align-self: flex-end;
  margin-right: 10%;
  margin-bottom: 20px;

  :hover {
    background: #383455;
  }
`;

export const ResultsWrap = styled.ul`
  width: 720px;
  // height: 56px;
  margin: 0 auto;

  margin-bottom: 16px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const ResultItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${fontGrey};
  height: 56px;
  line-height: 1.2em;
  text-align: center;
  margin-bottom: 12px;
  background: #383455;

  :hover {
    background: #464b86;
  }
`;

export const ResultDateDiv = styled.div``;

export const ResultTourTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
  }
`;

export const ResultBattleData = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0 20px;
  }
`;

export const RankInfoPopWrap = styled.div`
  width: 500px;
  line-height: 1.5em;
  position: absolute;
  bottom: 60px;
  right: 12px;
  z-index: 30;
  background: #423a71;
  padding: 16px 20px;

  h3 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 12px;
  }

  span {
    background: ${primary};
  }
`;

export const ContentLi = styled.li``;
