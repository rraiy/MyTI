import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {
    Wrap,
    StateUL,
    StateLi,
    OngoingWrap,
    UpcomingWrap,
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

const AllTours = () => {
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

    console.log(123);

    return (
        <Wrap>
            <StateUL>
                <StateLi className="pick">Ongoing</StateLi>
                <StateLi className="noPick">Upcoming</StateLi>
                <StateLi className="noPick">Finish</StateLi>
            </StateUL>

            <OngoingWrap>
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

            <UpcomingWrap>
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

            <UpcomingWrap>
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
            </UpcomingWrap>
        </Wrap>
    );
};

export default AllTours;
