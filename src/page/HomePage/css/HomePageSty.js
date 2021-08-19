import styled from 'styled-components';
import { primary, fontGrey } from '../../../public_component/globalStyle';

const browserH = window.innerHeight;

export const Wrap = styled.div`
  min-width: 1200px;
  min-height: calc(${browserH}px - 56px);
  position: relative;
  background: transparent
    linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%)
    0% 0% no-repeat padding-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 1199px) {
    min-width: 100%;
    padding-top: 80px;
    padding-bottom: 40px;
  }

  @media (max-width: 600px) and (min-width: 360px) {
    padding-top: 120px;
  }
`;

export const AegisVideo = styled.video`
  position: absolute;
  margin-top: -60px;
  z-index: 0;
`;

export const BackgroundStone = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  margin-top: 1100px;
`;

export const WebInfoWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  margin-top: 600px;
  margin-bottom: 100px;
  z-index: 1;

  p {
    color: #fff;
    font-size: 20px;
    line-height: 1.5em;
    text-shadow: 0px 1px 4px #000000, 0px 0px 6px grey;
  }

  @media (max-width: 1199px) {
    margin-top: 450px;
    margin-bottom: 0;

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) and (min-width: 360px) {
    margin-top: 120px;

    p {
      font-size: 14px;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
  color: rgb(236, 221, 255);
  text-shadow: 0px 1px 4px #000000, 0px 0px 6px #d8baff;

  @media (max-width: 1199px) {
    font-size: 32px;
    margin-bottom: 24px;
  }

  @media (max-width: 600px) and (min-width: 360px) {
    font-size: 20px;
  }
`;

export const WebInfoCardUl = styled.ul`
  display: flex;
  width: 90%;
  justify-content: space-around;
  margin: 120px 0;

  @media (max-width: 1199px) {
    margin: 60px 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 600px) and (min-width: 360px) {
    margin: 32px 0;
  }
`;

export const H3 = styled.h3`
  font-size: 20px;
  padding: 20px;
  color: ${primary};
`;

export const WebInfoCardLi = styled.li`
  width: 280px;
  // height: 280px;
  background: #1f1d33;
  margin: 0 15px;

  p {
    font-size: 14px;
    height: 70px;
    color: ${fontGrey};
    padding: 0 20px;
    text-shadow: 0 0;
    text-align: left;
    margin-bottom: 24px;
  }

  @media (max-width: 1199px) {
    margin-bottom: 20px;
    p {
      margin-bottom: 40px;
    }
  }
`;

export const InfoListUl = styled.ul`
  text-align: left;
  padding: 0 20px;
  margin-top: 12px;

  li:last-child {
    margin-bottom: 28px;
  }
`;

export const InfoListLi = styled.li`
  font-size: 14px;
  margin-bottom: 12px;
  display: flex;

  p {
    height: 20px;
    padding: 0 12px;
  }

  img {
    width: 12px;
    height: 12px;
  }
`;

export const lineImgWrap = styled.div`
  position: absolute;
`;
