import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { db } from '../../firebase/firestore';
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
  const [allTours, setAllTours] = useState(null);
  const [ongoingTours, setOngoingTours] = useState(null);
  const [upcomingTours, setUpcomingTours] = useState(null);
  const [recentTours, setRecentTours] = useState(null);
  const [showArea, setShowArea] = useState(defaultShowArea);

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

  const sortTours = () => {
    const ongoingArr = []; // 開始時間<今天 結束時間>今天
    const upcomingArr = []; // 開始時間>今天
    const recentArr = []; // 結束時間<今天

    const today = new Date(+new Date() + 8 * 3600 * 1000).toISOString().split('T')[0]; // 暫時簡單處理時區問題

    allTours.forEach((tour) => {
      const start = tour.date.tourStart;
      const end = tour.date.tourEnd;

      if (start < today && end > today) {
        ongoingArr.push(tour);
      }
      if (start > today) {
        upcomingArr.push(tour);
      }
      if (end < today) {
        recentArr.push(tour);
      }
    });
    setOngoingTours(ongoingArr);
    setUpcomingTours(upcomingArr);
    setRecentTours(recentArr);
  };

  useEffect(() => {
    db.collection('2021_tours')
      .orderBy('date.tourEnd', 'desc')
      .get()
      .then((res) => {
        const newArr = [];
        res.forEach((tour) => newArr.push(tour.data()));
        return newArr;
      })
      .then((all) => {
        setAllTours(all);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (allTours) {
      sortTours();
    }
  }, [allTours]);

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
            {!ongoingTours
              ? null
              : ongoingTours.map((tour) => {
                  return (
                    <TourLi key={tour.title_en}>
                      <div>
                        <img src={icon} alt="" />
                      </div>
                      <span>{tour.date.all}</span>
                      <div>
                        <img src={icon} alt="" />
                      </div>
                      <span>{tour.title_en}</span>
                      <span>{tour.location}</span>
                      <div>
                        <img src={icon} alt="" />
                      </div>
                    </TourLi>
                  );
                })}
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
            {!upcomingTours
              ? null
              : upcomingTours.map((tour) => {
                  return (
                    <TourLi key={tour.title_en}>
                      <div>
                        <img src={icon} alt="" />
                      </div>
                      <span>{tour.date.all}</span>
                      <div>
                        <img src={icon} alt="" />
                      </div>
                      <span>{tour.title_en}</span>
                      <span>{tour.location}</span>
                      <div>
                        <img src={icon} alt="" />
                      </div>
                    </TourLi>
                  );
                })}
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
            {!recentTours
              ? null
              : recentTours.map((tour) => {
                  return (
                    <TourLi key={tour.title_en}>
                      <div>
                        <p>{tour.result.one}</p>
                      </div>
                      <span>{tour.date.all}</span>
                      <div>
                        <img src={icon} alt="" />
                      </div>
                      <span>{tour.title_en}</span>
                      <span>{tour.location}</span>
                      <div>
                        <img src={icon} alt="" />
                      </div>
                    </TourLi>
                  );
                })}
          </TourListUL>
        </BoardDiv>
      </RecentWrap>
    </Wrap>
  );
};

export default AllTours;
