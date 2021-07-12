import styled from 'styled-components';
import {
  primary,
  secondary,
  fontGrey,
  fontWhite,
  fontYellow,
} from '../../../public_component/globalStyle';

export const Blur = styled.div`
  display: flex;
  width: 100%;
  height: 1200px;
  background: rgba(0, 0, 0, 0.73);
  position: fixed;
  z-index: 2;
`;

export const LRPopupWrap = styled.div.attrs((props) => ({
  color: props.success || fontGrey,
}))`
  display: flex;
  flex-direction: column;
  background: ${secondary};
  color: ${(props) => props.color};
  padding: 16px 32px;
  width: 336px;
  // height:619px;
  border-radius: 10px;
  position: fixed;
  z-index: 5;
  top: 80px;
  right: 34%;
`;

export const SignInBtn = styled.button`
  position: absolute;
  color: ${fontYellow};
  font-size: 16px;
  top: 30px;
  right: 20px;
  // cursor:pointer;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    color: ${fontWhite};
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  color: ${fontWhite};
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 276px;
  height: 40px;
  color: ${fontWhite};
  padding-inline-start: 10px;
  margin-bottom: 32px;
  background: rgba(0, 0, 0, 0);
  border: 2px solid ${fontGrey};
  border-radius: 10px;

  :focus {
    border: 2px solid ${primary};
  }

  :hover {
    border: 2px solid ${primary};
  }
`;

export const RegisterBtn = styled.button`
  width: 276px;
  height: 40px;
  font-size: 16px;
  color: ${fontWhite};
  background: ${primary};
  border-radius: 10px;
  margin-bottom: 48px;
`;

export const SeparateDiv = styled.div`
  color: ${fontGrey};
  width: 276px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;

  hr {
    width: 92px;
    height: 1px;
  }
`;

export const RegisterGoogleBtn = styled.button`
  width: 276px;
  height: 40px;
  color: ${fontGrey};
  border: 2px solid ${fontGrey};
  border-radius: 10px;
`;
