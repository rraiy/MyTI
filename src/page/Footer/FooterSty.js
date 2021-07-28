import styled from 'styled-components';
import { fontGrey } from '../../public_component/globalStyle';

export const FooterWrap = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(29, 12, 52);
  color: ${fontGrey};
  padding: 20px;
  z-index: 2;
  font-size: 12px;

  ul {
    display: flex;
  }

  li {
    margin-right: 20px;
  }

  p {
    font-size: 12px;
  }
`;
