import styled from 'styled-components';
import { fontGrey } from '../../../../public_component/globalStyle';

export const ExtraContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 300px;
  user-select: none;

  @media (max-width: 700px) {
    margin-bottom: 100px;
  }
`;

export const TiTleDiv = styled.div`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;

export const TeamPlayersWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 300px;
  }
`;

export const SpaceDiv = styled.div`
  height: 4px;
  background: #542883;
`;

export const TeamPlayerDiv = styled.div`
  background: #262955;
  color: ${fontGrey};

  p {
    font-size: 20px;
    text-align: center;
    padding: 10px 60px;
  }

  ul {
    padding: 10px 20px;
  }

  li {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;
