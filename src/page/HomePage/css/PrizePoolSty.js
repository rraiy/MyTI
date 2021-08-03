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

  @media (max-width: 1199px) {
    width: 90%;
    padding-top: 0;
    margin-bottom: 0px;
  }
`;

export const ChartWrap = styled.div`
  padding: 20px;
  text-align: left;
`;

export const H1 = styled.h1`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
  background: linear-gradient(to right, #423a71, #8720a0);
`;

export const ChartContentWrap = styled.div`
  display: flex;

  @media (max-width: 1199px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const ContentUl = styled.ul`
  margin: 28px 20px;
  text-align: left;
  color: ${fontGrey};

  }
`;

export const ContentLi = styled.li`
  margin-bottom: 20px;
  line-height: 1.3em;
  display: flex;
  align-items: flex-start;

  img {
    width: 12px;
    height: 12px;
    margin-right: 12px;
  }
`;

export const PrizeTextWrap = styled.ul`
  color: ${fontGrey};
  display: flex;
  flex-flow: wrap row;
  margin-top: 20px;

  li {
    border: 1px solid ${primary};
    padding: 8px 12px;
    margin: 12px;
  }

  p {
    margin-bottom: 8px;
  }
`;
