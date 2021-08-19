import styled from 'styled-components';
import { primary, fontGrey } from '../../../public_component/globalStyle';

export const Wrap = styled.div`
  min-width: 1200px;
  height: 1000px;
  background: transparent
    linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%)
    0% 0% no-repeat padding-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;

  color: #fff;

  @media (max-width: 1199px) {
    min-width: 700px;
  }

  @media (max-width: 699px) and (min-width: 360px) {
    min-width: 360px;
  }
`;

export const TourInfoWrap = styled.div`
  width: 1040px;

  h1 {
    font-size: 32px;
    color: #fff;
    margin-bottom: 20px;
  }

  hr {
    border: 1px solid ${primary};
    margin-bottom: 40px;
  }
`;

export const DetailMainImgWrap = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 400px;
  }
`;

export const InfoDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    margin-bottom: 20px;
  }
  li {
    margin-bottom: 12px;
  }
  p:first-child {
    color: ${fontGrey};
    margin-bottom: 8px;
  }
`;

export const RowDetailUl = styled.ul`
  display: flex;
  margin-top: 20px;

  li:not(:last-child) {
    // width: 160px;
    border-right: 1px solid ${fontGrey};
  }

  li {
    padding: 0 24px;
  }

  li:first-child {
    padding-left: 0;
  }
`;
