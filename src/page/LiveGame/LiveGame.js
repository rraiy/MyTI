import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Battle from './components/Battle';
import LiveChat from './components/LiveChat';
import ExtraContent from './components/ExtraContent';

const Wrap = styled.div`
  min-width: 1200px;
  // height:100%;
  background: transparent
    linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%)
    0% 0% no-repeat padding-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;

  @media (max-width: 1199px) {
    min-width: 700px;
  }

  @media (max-width: 699px) and (min-width: 360px) {
    min-width: 360px;
  }
`;

const LiveGame = ({ isSigned, user }) => {
  return (
    <Wrap>
      <Header isSigned={isSigned} user={user} />
      <Battle isSigned={isSigned} user={user} />
      <LiveChat isSigned={isSigned} user={user} />
      <ExtraContent isSigned={isSigned} user={user} />
    </Wrap>
  );
};

export default LiveGame;
