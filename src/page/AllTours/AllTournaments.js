import React, { useState, useEffect, useCallback, useRef } from 'react';
import firebase from 'firebase/app';
import { db } from '../../firebase/firestore';
import Ongoing from './components/Ongoing';
import Upcoming from './components/Upcoming';
import Recent from './components/Recent';
import {
  Wrap,
  StateUL,
  StateLi,
  dateWidth,
  tourTitleWidth,
  locationWidth,
  infoWidth,
  AllTourInfoDiv,
  InfoTextDiv,
  MobileStateMenuWrap,
  MobileAllWrap,
} from './css/AllTournamentsSty';

const defaultShowArea = {
  ongoing: true,
  upcoming: false,
  recent: false,
};

const mobileDefaultShowArea = {
  ongoing: 'block',
  upcoming: 'block',
  recent: 'block',
};

const ongoingAndUpcomingTitle = () => {
  return (
    <ul>
      <li style={{ width: 0 }}> </li>
      <li style={{ width: dateWidth }}>Date</li>
      <li style={{ width: 0 }}> </li>
      <li style={{ width: tourTitleWidth }}>Tournament</li>
      <li style={{ width: locationWidth }}>Location</li>
      <li style={{ width: infoWidth }}>Info</li>
    </ul>
  );
};

const AllTours = ({ userTour, userToken, isSigned, showLoginPopup }) => {
  const [allTours, setAllTours] = useState(null);
  const [ongoingTours, setOngoingTours] = useState(null);
  const [upcomingTours, setUpcomingTours] = useState(null);
  const [recentTours, setRecentTours] = useState(null);

  const [showArea, setShowArea] = useState(defaultShowArea);
  const [mobileStateSelect, setMobileStateSelect] = useState(mobileDefaultShowArea);
  const [mobileBrowser, setMobileBrowser] = useState(false);

  const ongoingRef = useRef();
  const upcomingRef = useRef();
  const recentRef = useRef();

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

  const handleClickArea = (area) => {
    const section = area;
    section.current.getBoundingClientRect().top = 105;
  };

  const checkScrollArea = () => {
    if (!mobileBrowser) {
      if (ongoingRef.current.getBoundingClientRect().top < 110) {
        switchArea('ongoing');
      }
      if (upcomingRef.current.getBoundingClientRect().top < 110) {
        switchArea('upcoming');
      }
      if (recentRef.current.getBoundingClientRect().top < 110) {
        switchArea('recent');
      }
    }
  };

  const sortTours = () => {
    const ongoingArr = []; // ????????????<?????? ????????????>??????
    const upcomingArr = []; // ????????????>??????
    const recentArr = []; // ????????????<??????

    const today = new Date(+new Date() + 8 * 3600 * 1000).toISOString().split('T')[0]; // ??????????????????????????????

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
    switch (e.target.value) {
      case 'ongoing':
        setMobileStateSelect({ ongoing: 'block', upcoming: 'none', recent: 'none' });
        break;
      case 'upcoming':
        setMobileStateSelect({ ongoing: 'none', upcoming: 'block', recent: 'none' });
        break;
      case 'recent':
        setMobileStateSelect({ ongoing: 'none', upcoming: 'none', recent: 'block' });
        break;
      case 'all':
        setMobileStateSelect(mobileDefaultShowArea);
        break;
      default:
    }
  };

  const checkMobileBrowser = () => {
    if (window.innerWidth < 1200) {
      setMobileBrowser(true);
      setMobileStateSelect(mobileDefaultShowArea);
    }
    if (window.innerWidth >= 1200) {
      setMobileBrowser(false);
    }
  };

  useEffect(() => {
    fetchAllTours();
    checkMobileBrowser();

    window.addEventListener('resize', checkMobileBrowser);

    return () => {
      window.removeEventListener('resize', checkMobileBrowser);
    };
  }, []);

  useEffect(() => {
    if (mobileBrowser) {
      window.addEventListener('scroll', checkScrollArea);
    }

    return () => {
      window.removeEventListener('scroll', checkScrollArea);
    };
  }, [mobileBrowser]);

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
            The special event pages make you dismissing your favorite tours. You can add tour&apos;s
            dates to your own custom calendar by click the favorite button (the star), remove it
            just by the same action.
          </p>
        </InfoTextDiv>
      </AllTourInfoDiv>
      <StateUL>
        <StateLi onClick={() => handleClickArea('ongoingRef')} show={showArea.ongoing}>
          <a href="#ongoing">Ongoing</a>
        </StateLi>
        <StateLi onClick={() => handleClickArea('upcomingRef')} show={showArea.upcoming}>
          <a href="#upcoming">Upcoming</a>
        </StateLi>
        <StateLi onClick={() => handleClickArea('recentRef')} show={showArea.recent}>
          <a href="#recent">Recent</a>
        </StateLi>
      </StateUL>

      <MobileStateMenuWrap>
        <label htmlFor="states">
          Choose a State???
          <select
            name="states"
            id="states"
            defaultValue="all"
            onChange={(e) => handleMobileSelect(e)}
          >
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
            <option value="recent">Recent</option>
            <option value="all">All</option>
          </select>
        </label>
      </MobileStateMenuWrap>

      {!mobileBrowser ? (
        <>
          <Ongoing
            ref={ongoingRef}
            ongoingAndUpcomingTitle={ongoingAndUpcomingTitle}
            ongoingTours={ongoingTours}
            userTour={userTour}
            handleFavoriteTour={handleFavoriteTour}
            checkFavorite={checkFavorite}
          />
          <Upcoming
            ref={upcomingRef}
            ongoingAndUpcomingTitle={ongoingAndUpcomingTitle}
            upcomingTours={upcomingTours}
            userTour={userTour}
            handleFavoriteTour={handleFavoriteTour}
            checkFavorite={checkFavorite}
          />
          <Recent ref={recentRef} recentTours={recentTours} />
        </>
      ) : (
        <MobileAllWrap>
          <Ongoing
            mobileStateSelect={mobileStateSelect}
            ongoingAndUpcomingTitle={ongoingAndUpcomingTitle}
            ongoingTours={ongoingTours}
            userTour={userTour}
            handleFavoriteTour={handleFavoriteTour}
            checkFavorite={checkFavorite}
          />
          <Upcoming
            mobileStateSelect={mobileStateSelect}
            ongoingAndUpcomingTitle={ongoingAndUpcomingTitle}
            upcomingTours={upcomingTours}
            userTour={userTour}
            handleFavoriteTour={handleFavoriteTour}
            checkFavorite={checkFavorite}
          />
          <Recent mobileStateSelect={mobileStateSelect} recentTours={recentTours} />
        </MobileAllWrap>
      )}
    </Wrap>
  );
};

export default AllTours;
