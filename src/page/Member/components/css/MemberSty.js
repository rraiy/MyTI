import styled from 'styled-components';
import { primary, fontWhite } from '../../../../public_component/globalStyle';

export const BtnWrap = styled.div`
  width: 820px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;

  @media (max-width: 800px) {
    width: 85%;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const AreaBtn = styled.button`
  color: ${(props) => (props.show ? fontWhite : primary)};
  font-size: 20px;
  border: 1px solid ${primary};
  border-radius: 5px;
  padding: 8px 16px;
  background: ${(props) => (props.show ? primary : null)};

  @media (max-width: 700px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;
