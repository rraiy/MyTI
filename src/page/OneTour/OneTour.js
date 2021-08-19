import React from 'react';
import {
  Wrap,
  TourInfoWrap,
  DetailMainImgWrap,
  InfoDetailDiv,
  RowDetailUl,
} from './css/OneTourSty';
import Banner from '../../images/game/weplay_major.jpg';

const OneTour = () => {
  return (
    <Wrap>
      <TourInfoWrap>
        <h1>WePlay AniMajor</h1>
        <hr />
        <DetailMainImgWrap>
          <InfoDetailDiv>
            <ul>
              <li>
                <p>Date</p>
                <p>2021-06-02 ~ 2021-06-13</p>
              </li>
              <li>
                <p>Location</p>
                <p>kyiv</p>
              </li>
            </ul>
            <RowDetailUl>
              <li>
                <p>Tier</p>
                <p>Tier 1</p>
              </li>
              <li>
                <p>Prize Pool</p>
                <p>$ 500,000 USD</p>
              </li>
              <li>
                <p>Teams</p>
                <p>12</p>
              </li>
            </RowDetailUl>
          </InfoDetailDiv>
          <img src={Banner} alt="" />
        </DetailMainImgWrap>
      </TourInfoWrap>
    </Wrap>
  );
};

export default OneTour;
