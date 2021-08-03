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
          <p>Elephant</p>
          <SpaceDiv />
          <ul>
            <li>Eurus</li>
            <li>Somnus丶M</li>
            <li>Yang</li>
            <li>fy</li>
            <li>Super</li>
          </ul>
        </TeamPlayerDiv>
      </TeamPlayersWrap>
    </ExtraContentWrap>
  );
};

export default ExtraContent;
