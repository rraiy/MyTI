import styled from 'styled-components';
import { primary, secondary } from '../../../../public_component/globalStyle';

export const AccountWrap = styled.div`
  width: 952px;
  border: 1px solid ${primary};
  border-radius: 16px;
  background: #1f1d33;
`;

export const UL = styled.ul`
  padding: 0px 80px;
`;

export const Li = styled.li`
  position: relative;
  border-bottom: 1px solid ${secondary};
  margin-bottom: 30px;

  img {
    width: 20px;
    position: absolute;
    right: 80px;
    cursor: pointer;
  }

  .edit {
    display: none;
  }

  .active {
    display: block;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  height: 60px;
  background: #464b86;
  text-align: center;
  line-height: 60px;
  border-radius: 16px 16px 0 0;
  margin-bottom: 30px;
`;

export const TitleDiv = styled.div`
  h3 {
    font-size: 16px;
    color: ${primary};
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    color: #dcacff;
    margin-bottom: 20px;
  }
`;

export const EditDiv = styled.div`
  margin-bottom: 16px;

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  height: 28px;
  margin-right: 20px;
`;

export const Button = styled.button`
  width: 60px;
  height: 28px;
  margin-right: 10px;
  border: 1px solid ${(props) => (props.className === 'save' ? 'none' : primary)};
  background: ${(props) => (props.className === 'save' ? primary : null)};
  color: ${(props) => (props.className === 'save' ? '#fff' : primary)};
`;
