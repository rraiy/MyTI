import React from 'react';

import { Link } from 'react-router-dom';
import {
  RecentWrap,
  H2,
  BoardDiv,
  TitleDiv,
  TourListUL,
  TourLi,
  markWidth,
  dateWidth,
  tourLogoWidth,
  tourTitleWidth,
  locationWidth,
  infoWidth,
} from '../css/AllTournamentsSty';
import icon from '../../../images/icon/tour.png';

const Recent = ({ recentTours }) => {
  return (
    <>
      <RecentWrap id="recent">
        <H2>Recent</H2>
        <BoardDiv>
          <TitleDiv>
            <ul>
              <li style={{ width: markWidth }}>Champion</li>
              <li style={{ width: dateWidth }}>Date</li>
              <li style={{ width: tourLogoWidth }}> </li>
              <li style={{ width: tourTitleWidth }}>Tournament</li>
              <li style={{ width: locationWidth }}>Location</li>
              <li style={{ width: infoWidth }}>Info</li>
            </ul>
          </TitleDiv>
          <TourListUL>
            {!recentTours
              ? null
              : recentTours.map((tour) => {
                  return (
                    <TourLi key={tour.title_en}>
                      <div>
                        <p>{tour.result.one}</p>
                      </div>
                      <span>{tour.date.all}</span>
                      <div>{/* <img src={icon} alt="" /> */}</div>
                      <span>{tour.title_en}</span>
                      <span>{tour.location}</span>
                      <div>
                        <Link to="/tour">
                          <img src={icon} alt="" />
                        </Link>
                      </div>
                    </TourLi>
                  );
                })}
          </TourListUL>
        </BoardDiv>
      </RecentWrap>
    </>
  );
};

export default Recent;
