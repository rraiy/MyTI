import styled from 'styled-components';
import { primary, secondary, fontWhite, fontGrey } from '../../../../public_component/globalStyle';

const borderColor = 'rgba(168,73,237,0.27)';

export const UserCalendarWrap = styled.div`
  width: 900px;
  background: #231d40;
  padding: 12px;

  @media (max-width: 1199px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 99%;
    padding: 0;
  }
`;

export const SelectMonthDiv = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  button {
    margin-right: 12px;
  }
`;

export const MonthBtn = styled.button`
  color: ${fontWhite};
  background: #282b58;
  width: 80px;
  height: 40px;
`;

export const TodayBtn = styled.button`
  color: ${fontWhite};
  background: #282b58;
  width: 80px;
  height: 40px;
`;

export const DayUl = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  color: ${primary};
  font-weight: bold;

  li {
    width: 99%;
    border: 1px solid ${borderColor};
    border-right: none;
    text-align: center;
    padding: 8px 16px;

    @media (max-width: 600px) {
      padding: 4px 8px;
    }
  }

  li:nth-last-child(1) {
    border-right: 1px solid ${borderColor};
  }

  @media (max-width: 600px) {
    font-weight: normal;
    font-size: 12px;
  }
`;

export const AllRowsUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;

  li {
    list-style: none;

    overflow: hidden;
  }

  .today {
    background: ${secondary};
  }

  .in-prev-month,
  .in-next-month {
    p {
      opacity: 0.3;
    }
  }
`;

export const RowsWrap = styled.ul`
  display: flex;
  li {
    width: 99%;
    height: 100px;
    text-align: center;
    border: 1px solid ${borderColor};
    border-right: none;
    border-top: none;
  }

  li:nth-last-child(1) {
    border-right: 1px solid ${borderColor};
  }

  p {
    text-align: right;
    padding: 8px;
    margin-bottom: 4px;
  }
`;

export const EventDiv = styled.div`
  width: 100%;
  height: 22px;
  background: #8681ff;
  color: ${fontWhite};
  font-size: 14px;
  padding: 4px 0;
  margin-bottom: 4px;
  white-space: nowrap;
  cursor: pointer;
`;

export const EventPopupDiv = styled.div`
  background: rgb(75, 30, 108);
  padding: 20px 30px;
  position: fixed;
  z-index: 200;
  border-radius: 5px;
  line-height: 2em;
  color: #fff;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 80%;
    padding: 8px 16px;
    left: 30px;
  }

  p {
    margin-bottom: 20px;
  }

  p:nth-child(2) {
    font-size: 20px;
  }

  img {
    width: 24px;
    float: right;
    cursor: pointer;
  }

  button {
    width: 160px;
    height: 30px;
    color: ${fontGrey};
    padding: 8px 12px;
    background: ${secondary};
    border-radius: 5px;
    margin: 0 8px;
  }

  button:nth-child(4) {
    width: 160px;
    height: 30px;
    color: ${fontGrey};
    padding: 8px 12px;
    background: none;
    border: 1px solid ${fontGrey};
    border-radius: 5px;
    margin: 0 4px;
  }

  button:nth-child(4):hover {
    background: ${primary};
  }
`;

export const InfoP = styled.p`
  margin-bottom: 20px;
  line-height: 1.5em;
`;
