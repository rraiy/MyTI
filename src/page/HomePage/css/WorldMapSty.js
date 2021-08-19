import styled from 'styled-components';
import { fontGrey } from '../../../public_component/globalStyle';

export const WorldMapWrap = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  width: 92%;
  background: #1f1d33;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 1199px) {
    width: 90%;
    padding-top: 0;
    margin-bottom: 0px;
  }
`;

export const MapSvg = styled.svg`
  margin-top: 20px;
`;

export const H1 = styled.h1`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
  background: linear-gradient(to right, #423a71, #8720a0);
`;

export const ContentMapWrap = styled.div`
  display: flex;

  @media (max-width: 1199px) {
    flex-direction: column-reverse;
  }
`;

export const ContentUl = styled.ul`
  margin: 40px 28px 20px;
  text-align: left;
  color: ${fontGrey};
`;

export const ContentLi = styled.li`
  margin-bottom: 20px;
  line-height: 1.3em;
  display: flex;
  align-items: flex-start;
  font-size: 14px;

  img {
    width: 12px;
    height: 12px;
    margin-right: 12px;
  }
`;

export const QualifiersPhoneUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
  color: #fff;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px;
    padding: 16px;
    border: 1px solid rgba(188, 13, 101, 0.7);
  }

  h3 {
    color: ${fontGrey};
  }
`;

export const TeamLogoDiv = styled.div`
  width: 120px;
  height: 160px;
  display: flex;
  justify-content: center;
  img {
    width: 80px;
    object-fit: contain;
  }
`;
