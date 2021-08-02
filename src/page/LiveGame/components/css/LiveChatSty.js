import styled from 'styled-components';

import { primary, fontGrey } from '../../../../public_component/globalStyle';

export const LiveChatWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  justify-content: space-around;
  color: #fff;
  margin-bottom: 160px;
  user-select: none;

  @media (max-width: 1199px) {
    height: auto;
  }

  @media (max-width: 699px) and (min-width: 360px) {
    margin-bottom: 20px;
  }
`;
export const StreamSelectDiv = styled.div`
  :first-child {
    margin-left: 100px;
  }

  .block {
    color: #fff;
    background: ${primary};
    transform: none;
  }

  @media (max-width: 699px) {
    :first-child {
      margin-left: 30%;
    }
  }
`;

export const StreamSelectBtn = styled.button`
  width: 120px;
  height: 48px;
  font-size: 16px;
  margin-bottom: 20px;
  margin-right: 20px;
  border: 1px solid ${primary};
  border-radius: 5px;
  color: ${primary};
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  :focus {
    color: #fff;
    background: ${primary};
    transform: none;
  }

  @media (max-width: 699px) {
    width: 60px;
    height: 36px;
    font-size: 12px;
  }
`;

export const StreamChatWrap = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;

  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 699px) and (min-width: 360px) {
    width: 98%;
  }
`;

export const StreamDiv = styled.div`
  width: ${(props) => (props.bigger ? '1000px' : '800px')};
  height: ${(props) => (props.bigger ? '585px' : '468px')};
  // border: 1px solid ${primary};

  .mod-small {
    position: fixed;
    width: 515px;
    height: 290px;
    bottom: 30px; // 30px
    right: 60px; // 60px
    z-index: 30;
  }

  .mod-drag {
    bottom: none;
    right: none;
    // top: ${(props) => props.dragPosition[0]}px;
    // left: ${(props) => props.dragPosition[1]}px;
  }

  @media (max-width: 1199px) {
    width: 680px;
    height: 360px;
    margin-bottom: 20px;
  }

  @media (max-width: 699px) and (min-width: 360px) {
    width: 90%;
    height: 240px;
    margin-bottom: 20px;
  }
`;

export const StreamFrameDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const StreamDragLayer = styled.div`
  display: ${(props) => (props.mod ? 'block' : 'none')};
  background: ${primary};
  color: #fff;
  text-align: center;
  line-height: 30px;
  width: 100%;
  height: 30px;
  position: absolute;
  top: -30px;
  left: 0;
  cursor: move;
  opacity: 0.8;

  p {
    display: inline-block;
  }

  img {
    width: 16px;
    position: absolute;
    top: 8px;
    right: 12px;
    cursor: pointer;
  }
`;

export const Iframe = styled.iframe`
  // display:none;
`;

export const ChatDiv = styled.div`
  width: ${(props) => (props.hide ? '180px' : '380px')};
  height: 468px;

  @media (max-width: 699px) {
    width: 90%;
  }
`;

export const ChatTitle = styled.div`
  position: relative;
  background: #5c2088;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  color: ${fontGrey};
  font-size: 18px;

  @media (max-width: 699px) {
    font-size: 14px;
  }
`;

export const MiniI = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 16px;

  :hover {
    background: #fff;
  }

  @media (max-width: 699px) {
    width: 16px;
    height: 16px;
  }
`;

export const ChatSpace = styled.div`
  background: rgb(38, 4, 64);
  height: 320px;
  border: 4px solid #5c2088;
  border-top: none;
  padding: 8px 12px;
  overflow: scroll;
  overflow-x: hidden;
  word-wrap: normal;
  display: ${(props) => props.hide};

  img {
    width: 20px;
    margin-right: 4px;
  }

  -webkit-scrollbar-thumb {
    //need fix not working
    -webkit-box-shadow: inset 0 0 6px ${primary};
  }
`;

export const ChatType = styled.form`
  display: ${(props) => props.hide};
  padding: 8px 16px;
  border: 4px solid #5c2088;
  border-top: none;

  img {
    width: 20px;
  }
`;
// export const TeamLogo = styled.img`
//     width:40px;
//     margin-right:8px;
// `

export const Li = styled.li`
  color: ${fontGrey};
  margin-bottom: 8px;
  line-height: 1.3em;
  display: flex;
  align-items: center;

  @media (max-width: 699px) {
    font-size: 12px;
  }
`;
export const LeftDiv = styled.div`
  margin-right: 24px;
`;

export const ChatInput = styled.input`
  // opacity:1;
  // border:none;
  // border-bottom:1px solid #ccc;
  width: 300px;
  height: 30px;
  outline: 0;
  border-width: 0 0 2px;
  background: rgba(1, 1, 1, 0);
  color: #fff;
  margin-bottom: 8px;

  :focus {
    border: 1px solid #a849ed;
  }
`;

export const LimitP = styled.p`
  font-size: 8px;
  color: ${(props) => props.color || fontGrey};
`;

export const SendBtn = styled.button`
  img {
  }
  // &:hover{
  //     transform:scale(1.3)
  // }
`;

export const SendImg = styled.img`
  opacity: ${(props) => (props.disabled ? '0.2' : '1')};
`;

export const UserLogoNameDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  img {
    margin-right: 4px;
  }
`;
