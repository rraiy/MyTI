import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {
  Wrap,
  StateUL,
  StateLi,
  OngoingWrap,
  UpcomingWrap,
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
} from './css/AllTournamentsSty';
import icon from '../../images/icon/tour.png';

const defaultShowArea = {
  ongoing: true,
  upcoming: false,
  recent: false,
};

const AllTours = () => {
  const [showArea, setShowArea] = useState(defaultShowArea);
  // const text = () => {
  //     db.collection('member').doc(userToken)
  //     .update({
  //         user_tour:firebase.firestore.FieldValue.arrayUnion({
  //             tourTitle:'DPC GAMES',
  //             tourStart:'2021-07-09',
  //             tourEnd:'2021-07-16'
  //         })
  //     })
  // }

  const switchArea = (block) => {
    switch (block) {
      case 'ongoing':
        setShowArea({ ongoing: true, upcoming: false, recent: false });
        break;
      case 'upcoming':
        setShowArea({ ongoing: false, upcoming: true, recent: false });
        break;
      case 'recent':
        setShowArea({ ongoing: false, upcoming: false, recent: true });
        break;
      default:
    }
  };

  console.log(123);

  return (
    <Wrap>
      <StateUL>
        <StateLi onClick={(e) => switchArea('ongoing')} show={showArea.ongoing}>
          <a href="#ongoing">Ongoing</a>
        </StateLi>
        <StateLi onClick={(e) => switchArea('upcoming')} show={showArea.upcoming}>
          <a href="#upcoming">Upcoming</a>
        </StateLi>
        <StateLi onClick={(e) => switchArea('recent')} show={showArea.recent}>
          <a href="#recent">Recent</a>
        </StateLi>
      </StateUL>

      <OngoingWrap id="ongoing">
        <H2>Ongoing</H2>
        <BoardDiv>
          <TitleDiv>
            <ul>
              <li style={{ width: markWidth }}> </li>
              <li style={{ width: dateWidth }}>Date</li>
              <li style={{ width: tourLogoWidth }}> </li>
              <li style={{ width: tourTitleWidth }}>Tournament</li>
              <li style={{ width: locationWidth }}>Location</li>
              <li style={{ width: infoWidth }}>Info</li>
            </ul>
          </TitleDiv>
          <TourListUL>
            <TourLi>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>2020.03.15-03.20</span>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>ESLOne洛杉磯Major</span>
              <span>美國洛杉磯</span>
              <div>
                <img src={icon} alt="" />
              </div>
            </TourLi>
            <TourLi>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>2020.03.15-03.20</span>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>Dota Pro Circuit 2021: Season 2 - China Upper Division</span>
              <span>美國洛杉磯</span>
              <div>
                <img src={icon} alt="" />
              </div>
            </TourLi>
          </TourListUL>
        </BoardDiv>
      </OngoingWrap>

      <UpcomingWrap id="upcoming">
        <H2>Upcoming</H2>
        <BoardDiv>
          <TitleDiv>
            <ul>
              <li style={{ width: markWidth }}> </li>
              <li style={{ width: dateWidth }}>Date</li>
              <li style={{ width: tourLogoWidth }}> </li>
              <li style={{ width: tourTitleWidth }}>Tournament</li>
              <li style={{ width: locationWidth }}>Location</li>
              <li style={{ width: infoWidth }}>Info</li>
            </ul>
          </TitleDiv>
          <TourListUL>
            <TourLi>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>2020.03.15-03.20</span>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>ESLOne洛杉磯Major</span>
              <span>美國洛杉磯</span>
              <div>
                <img src={icon} alt="" />
              </div>
            </TourLi>
            <TourLi>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>2020.03.15-03.20</span>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>Dota Pro Circuit 2021: Season 2 - China Upper Division</span>
              <span>美國洛杉磯</span>
              <div>
                <img src={icon} alt="" />
              </div>
            </TourLi>
          </TourListUL>
        </BoardDiv>
      </UpcomingWrap>

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
            <TourLi>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>2020.03.15-03.20</span>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>ESLOne洛杉磯Major</span>
              <span>美國洛杉磯</span>
              <div>
                <img src={icon} alt="" />
              </div>
            </TourLi>
            <TourLi>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>2020.03.15-03.20</span>
              <div>
                <img src={icon} alt="" />
              </div>
              <span>Dota Pro Circuit 2021: Season 2 - China Upper Division</span>
              <span>美國洛杉磯</span>
              <div>
                <img src={icon} alt="" />
              </div>
            </TourLi>
          </TourListUL>
        </BoardDiv>
      </RecentWrap>
    </Wrap>
  );
};

export default AllTours;
