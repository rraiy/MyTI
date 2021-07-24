import styled from 'styled-components';
import { primary, fontGrey } from '../../../public_component/globalStyle';

// linear-gradient(to right, #423a71, #8720a0);

export const PrizePoolWrap = styled.div`
  width: 92%;
  background: #1f1d33;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 100px;

  .axis text,
  .axis path,
  .axis line {
    color: ${primary};
  }
`;

export const ChartWrap = styled.div`
  padding: 20px;
`;

export const H1 = styled.h1`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
  background: linear-gradient(to right, #423a71, #8720a0);
`;
