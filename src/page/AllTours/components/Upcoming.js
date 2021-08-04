import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UpcomingWrap,
  H2,
  BoardDiv,
  TitleDiv,
  TourListUL,
  TourLi,
  FavoriteBtn,
} from '../css/AllTournamentsSty';
import icon from '../../../images/icon/tour.png';
import addStarI from '../../../images/icon/star_add.png';
import blankStarI from '../../../images/icon/star_blank.png';

const Upcoming = ({
  ongoingAndUpcomingTitle,
  upcomingTours,
  userTour,
  handleFavoriteTour,
  checkFavorite,
  mobileStateSelect,
}) => {
  return (
    <>
      <UpcomingWrap
        id="upcoming"
        className="upcoming"
        style={{ display: mobileStateSelect ? mobileStateSelect.upcoming : 'block' }}
      >
        <H2>Upcoming</H2>
        <BoardDiv>
          <TitleDiv className="title-row">{ongoingAndUpcomingTitle()}</TitleDiv>
          <TourListUL>
            {!upcomingTours
              ? null
              : upcomingTours.map((tour) => {
                  return (
                    <TourLi key={tour.title_en}>
                      {!userTour ? (
                        <FavoriteBtn onClick={() => handleFavoriteTour(tour.title_en, tour.date)}>
                          <img src={blankStarI} alt="" />
                        </FavoriteBtn>
                      ) : (
                        <FavoriteBtn
                          onClick={() => handleFavoriteTour(tour.title_en, tour.date)}
                          className={checkFavorite(tour.title_en)}
                        >
                          <img
                            src={checkFavorite(tour.title_en) ? addStarI : blankStarI}
                            alt="favorite button"
                          />
                        </FavoriteBtn>
                      )}

                      <span>{tour.date.all}</span>
                      <div>{/* <img src={icon} alt="" /> */}</div>
                      <span className="title">{tour.title_en}</span>
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
      </UpcomingWrap>
    </>
  );
};

export default Upcoming;
