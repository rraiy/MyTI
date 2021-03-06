import styled from 'styled-components';
import {
  primary,
  secondary,
  fontGrey,
  fontWhite,
  fontWaring,
} from '../../../public_component/globalStyle';

export const NavibarWrap = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(29, 12, 52);
  color: ${fontGrey};
  padding: 20px;
  font-size: 24px;
  position: fixed;
  top: 0;
  z-index: 2;

  @media (max-width: 500px) {
  }
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.73);
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  // width:132px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    width: auto;
    position: absolute;
    top: 10px;
    left: 47%;
    p {
      display: none;
    }
    img {
      margin-right: 0;
    }
  }
`;

export const PhoneMenuUl = styled.ul`
  position: fixed;
  top: 68px;
  right: 0;
  left: 0;
  background-color: ${secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: ${(props) => props.height};
  li {
    margin-bottom: 40px;
    color: #fff;
    font-size: 16px;
    padding: 20px 0;
  }
`;

export const MenuI = styled.img`
  display: none;

  @media (max-width: 800px) {
    display: inline-block;
    width: 30px;
    :hover {
      background-color: blueviolet;
    }
  }
`;

export const PageUL = styled.ul`
  width: 400px;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  li {
    color: ${fontGrey};
  }

  li:hover {
    color: ${primary};
  }

  @media (max-width: 800px) {
    // order:-1;
    display: none;
  }
`;

export const SearchRegisterWrap = styled.div`
  display: flex;
  position: relative;

  img {
    width: 18px;
    position: absolute;
    z-index: 1;
    top: 6px;
    left: 8px;
  }

  @media (max-width: 800px) {
    img {
      left: -36px;
    }
  }

  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

export const SearchInput = styled.input`
  width: 160px;
  height: 30px;
  border: 3px solid rgb(83, 83, 83);
  border-radius: 10px;
  background: rgba(67, 67, 67, 56);
  padding-inline-start: 30px;
  margin-right: 16px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  color: ${primary};
  border: 2px solid ${primary};
  border-radius: 56px;
  padding: 4px 10px;
  margin-right: 30px;

  :hover {
    color: ${fontWhite};
    background: ${primary};
    cursor: pointer;
  }

  @media (max-width: 800px) {
    margin-right: 0;
  }
`;
export const UserMenuDiv = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  font-size: 14px;
  color: ${primary};
  // border: 2px solid ${primary};
  border-radius: 56px;
  justify-content: flex-start;
  align-items: center;
  line-height: 30px;
  overflow: hidden;

  img {
    width: 16px;
    position: static;
    margin: 0 4px;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :hover {
    color: ${fontWhite};
    background: ${primary};
    cursor: pointer;
  }
`;

export const MenuUl = styled.ul`
  display: ${(props) => props.show};
  position: absolute;
  width: 120px;
  top: 35px;
  right: 10px;
  font-size: 14px;
  background: #1f1d33;
  padding: 10px 20px;
  text-align: center;

  li {
    color: #fff;
    margin-bottom: 20px;

    :hover {
      color: ${primary};
    }
  }

  button {
    color: #fff;
    :hover {
      color: ${primary};
    }
  }
`;

export const SignoutBtn = styled.button``;
