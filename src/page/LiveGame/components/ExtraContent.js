import React from 'react';
import {
  ExtraContentWrap,
  TiTleDiv,
  TeamPlayersWrap,
  TeamPlayerDiv,
  SpaceDiv,
} from './css/ExtraContentSty';

const ExtraContent = () => {
  return (
    <ExtraContentWrap>
      <TiTleDiv>Team Players</TiTleDiv>
      <TeamPlayersWrap>
        <TeamPlayerDiv>
          <p>PSG.LGD</p>
          <SpaceDiv />
          <ul>
            <li>AME</li>
            <li>Maybe</li>
            <li>Chalice</li>
            <li>fy</li>
            <li>xNova</li>
          </ul>
        </TeamPlayerDiv>
        <TeamPlayerDiv>
          <p>PSG.LGD</p>
          <SpaceDiv />
          <ul>
            <li>AME</li>
            <li>Maybe</li>
            <li>Chalice</li>
            <li>fy</li>
            <li>xNova</li>
          </ul>
        </TeamPlayerDiv>
      </TeamPlayersWrap>
    </ExtraContentWrap>
  );
};

export default ExtraContent;
