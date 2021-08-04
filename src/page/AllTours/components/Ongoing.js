import React from 'react';
import { Link } from 'react-router-dom';
import {
  OngoingWrap,
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

const Ongoing = ({
  ongoingTours,
  ongoingAndUpcomingTitle,
  userTour,
  handleFavoriteTour,
  checkFavorite,
}) => {
  return (
    <>
      <OngoingWrap id="ongoing">
        <H2>Ongoing</H2>
        <BoardDiv>
          <TitleDiv>{ongoingAndUpcomingTitle()}</TitleDiv>
          <TourListUL>
            {!ongoingTours
              ? null
              : ongoingTours.map((tour) => {
                  return (
                    <TourLi key={tour.title_en}>
                      {!userTour ? (
                        <FavoriteBtn onClick={() => handleFavoriteTour(tour.title_en, tour.date)}>
                          <img src={blankStarI} alt="" />
                        </FavoriteBtn>
                      ) : (
                        <FavoriteBtn onClick={() => handleFavoriteTour(tour.title_en, tour.date)}>
                          <img
                            src={checkFavorite(tour.title_en) ? addStarI : blankStarI}
                            alt="favorite button"
                          />
                        </FavoriteBtn>
                      )}

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
      </OngoingWrap>
    </>
  );
};

export default Ongoing;
