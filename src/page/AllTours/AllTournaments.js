import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import { db } from '../../firebase/firestore';
import Ongoing from './components/Ongoing';
import Upcoming from './components/Upcoming';
import Recent from './components/Recent';
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
  FavoriteBtn,
  AllTourInfoDiv,
  InfoTextDiv,
  MobileStateMenuWrap,
} from './css/AllTournamentsSty';
import icon from '../../images/icon/tour.png';
import addStarI from '../../images/icon/star_add.png';
import blankStarI from '../../images/icon/star_blank.png';

const defaultShowArea = {
  ongoing: true,
  upcoming: false,
  recent: false,
};

const ongoingAndUpcomingTitle = function () {
  return (
    <ul>
      <li style={{ width: markWidth }}> </li>
      <li style={{ width: dateWidth }}>Date</li>
      <li style={{ width: 0 }}> </li>
      <li style={{ width: tourTitleWidth }}>Tournament</li>
      <li style={{ width: locationWidth }}>Location</li>
      <li style={{ width: infoWidth }}>Info</li>
    </ul>
  );
};

const AllTours = ({ user, userTour, userToken, isSigned, showLoginPopup }) => {
  const [allTours, setAllTours] = useState(null);
  const [ongoingTours, setOngoingTours] = useState(null);
  const [upcomingTours, setUpcomingTours] = useState(null);
  const [recentTours, setRecentTours] = useState(null);
  const [showArea, setShowArea] = useState(defaultShowArea);
  const [mobileStateSelect, setMobileStateSelect] = useState('all');

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

  const handleFavoriteTour = useCallback(
    (tourName, tourDate) => {
      if (!isSigned) {
        return showLoginPopup();
      }
      db.collection('member')
        .doc(userToken)
        .get()
        .then((res) => res.data().user_tour)
        .then((hadTours) => {
          // console.log(hadTours);
          if (hadTours === '') {
            return 0;
          }
          const result = hadTours.filter((item) => item.tourTitle === tourName);
          return result;
        })
        .then((filterResult) => {
          if (filterResult.length === 0) {
            db.collection('member')
              .doc(userToken)
              .update({
                user_tour: firebase.firestore.FieldValue.arrayUnion({
                  tourTitle: tourName,
                  tourStart: tourDate.tourStart,
                  tourEnd: tourDate.tourEnd,
                }),
              });
          }
          if (filterResult.length !== 0) {
            db.collection('member')
              .doc(userToken)
              .update({
                user_tour: firebase.firestore.FieldValue.arrayRemove({
                  tourTitle: tourName,
                  tourStart: tourDate.tourStart,
                  tourEnd: tourDate.tourEnd,
                }),
              });
          }
        })
        .catch((err) => console.log(err));
    },
    [userTour],
  );

  const fetchAllTours = async () => {
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
  };

  const checkFavorite = useCallback(
    (tourName) => {
      if (userTour) {
        const checkFavoriteResult = userTour.find((tour) => tour.tourTitle === tourName);
        if (checkFavoriteResult) {
          return true;
        }
      }
      return false;
    },
    [userTour],
  );

  const handleMobileSelect = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    fetchAllTours();
  }, []);

  useEffect(() => {
    if (allTours) {
      sortTours();
    }
  }, [allTours]);

  useEffect(() => {
    if (userTour) {
      fetchAllTours();
    }
  }, [userTour]);

  return (
    <Wrap>
      <AllTourInfoDiv>
        <h3>Dota2 TI Tournaments Statistics</h3>
        <InfoTextDiv>
          <p>
            This section provides access to all the international and related events static
            collected.
          </p>
          <p>
            The special event pages make you dismissing your favorite tours. You can add tour's
            dates to your own custom calendar by click the favorite button (the star), remove it
            just by the same action.
          </p>
        </InfoTextDiv>
      </AllTourInfoDiv>
      <StateUL>
        <StateLi onClick={() => switchArea('ongoing')} show={showArea.ongoing}>
          <a href="#ongoing">Ongoing</a>
        </StateLi>
        <StateLi onClick={() => switchArea('upcoming')} show={showArea.upcoming}>
          <a href="#upcoming">Upcoming</a>
        </StateLi>
        <StateLi onClick={() => switchArea('recent')} show={showArea.recent}>
          <a href="#recent">Recent</a>
        </StateLi>
      </StateUL>

      <MobileStateMenuWrap>
        <label htmlFor="states">Choose a State：</label>
        <br />
        <select
          name="states"
          id="states"
          defaultValue="All"
          onChange={(e) => handleMobileSelect(e)}
        >
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
          <option value="recent">Recent</option>
          <option value="all">All</option>
        </select>
      </MobileStateMenuWrap>

      <Ongoing
        ongoingAndUpcomingTitle={ongoingAndUpcomingTitle}
        ongoingTours={ongoingTours}
        userTour={userTour}
        handleFavoriteTour={handleFavoriteTour}
        checkFavorite={checkFavorite}
      />

      <Upcoming
        ongoingAndUpcomingTitle={ongoingAndUpcomingTitle}
        upcomingTours={upcomingTours}
        userTour={userTour}
        handleFavoriteTour={handleFavoriteTour}
        checkFavorite={checkFavorite}
      />

      <Recent recentTours={recentTours} />
    </Wrap>
  );
};

export default AllTours;
