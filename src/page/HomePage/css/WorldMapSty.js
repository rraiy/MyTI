import styled from 'styled-components';
import { fontGrey } from '../../../public_component/globalStyle';

export const WorldMapWrap = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  width: 92%;
  background: #1f1d33;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
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
