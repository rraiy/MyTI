import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../firebase/firestore';
import {
  HotTourRankWrap,
  TourAndResult,
  DateDiv,
  LiveDiv,
  Rank,
  HotTourTitle,
  RecentBtn,
  ResultBtn,
  BtnBottomLine,
  HotTourWrap,
  HotTourItem,
  RankTitle,
  RankTextUl,
  RankRowUl,
  AllTourBtn,
  ResultsWrap,
  ResultItem,
  ResultDateDiv,
  ResultTourTitle,
  ResultBattleData,
  RankInfoPopWrap,
} from '../css/MainContentSty';
import Weplay from '../../../images/tours/weplay.png';
import CrownI from '../../../images/icon/crown.png';
import Logo from '../../../images/game/Weplay_animajor_icon.png';
import InformationI from '../../../images/icon/information.png';

const MainContent = ({ hideRedBottomLine }) => {
  const [hotTourData, setHotTourData] = useState(null);
  const [rankData, setRankData] = useState(null);
  const [lineShow, setLineShow] = useState('hotEvents');
  const [rankInfoPop, setRankInfoPop] = useState(false);
  const mockData = [0, 1, 2, 3, 4, 5, 6];

  const changeLine = (area) => {
    setLineShow(area);
  };

  useEffect(() => {
    db.collection('2021_tours')
      .orderBy('date.tourEnd', 'desc')
      .limit(4)
      .get()
      .then((res) => {
        const tourArr = [];
        res.forEach((tour) => {
          tourArr.push(tour.data());
        });
        setHotTourData(tourArr);
      });

    db.collection('dpc_rank')
      .orderBy('rank', 'asc')
      .limit(12)
      .get()
      .then((res) => {
        const arr = [];
        res.forEach((doc) => {
          arr.push(doc.data());
        });
        setRankData(arr);
      });
  }, []);

  return (
    <>
      <HotTourRankWrap>
        <TourAndResult>
          <HotTourTitle>
            <BtnBottomLine show={lineShow} hideRedBottomLine={hideRedBottomLine} />
            <RecentBtn onClick={() => changeLine('hotEvents')}>Hot Events</RecentBtn>
            <ResultBtn onClick={() => changeLine('results')}>Latest Results</ResultBtn>
          </HotTourTitle>

          {lineShow === 'hotEvents' ? (
            <HotTourWrap>
              {!hotTourData ? (
                <div>Loading</div>
              ) : (
                hotTourData.map((tour) => {
                  return (
                    <HotTourItem key={tour.title_en}>
                      <DateDiv>{tour.date.all}</DateDiv>
                      <LiveDiv className="live">Live</LiveDiv>
                      <img src={Weplay} alt="" />
                      <p>{tour.title_en}</p>
                    </HotTourItem>
                  );
                })
              )}
            </HotTourWrap>
          ) : (
            <ResultsWrap>
              {mockData.map((d, i) => {
                return (
                  <ResultItem key={i}>
                    <ResultDateDiv>
                      <p>2020-01-01</p>
                      <p>17:00</p>
                    </ResultDateDiv>
                    <ResultTourTitle>
                      <img src={Logo} alt="" />
                      <p>2021 Weplay Major</p>
                    </ResultTourTitle>
                    <ResultBattleData>
                      <img src={Logo} alt="" />
                      <p>
                        1:0
                        <br />
                        BO3
                      </p>
                      <img src={Logo} alt="" />
                    </ResultBattleData>
                  </ResultItem>
                );
              })}
            </ResultsWrap>
          )}

          <Link to="/tournaments" style={{ alignSelf: ' flex-end', marginRight: '40px' }}>
            <AllTourBtn type="button">More Tournaments</AllTourBtn>
          </Link>
        </TourAndResult>

        <Rank>
          <RankTitle>
            <p>2021 DPC Ranking</p>
            <img
              src={InformationI}
              alt="information icon"
              onMouseOver={() => setRankInfoPop(!rankInfoPop)}
              onMouseOut={() => setRankInfoPop(!rankInfoPop)}
            />
            {!rankInfoPop ? null : (
              <RankInfoPopWrap>
                <h3>Dota Pro Circuit 2021</h3>
                <p>
                  The 2021 competitive season takes new shape, as teams face off in Regional
                  Leaguesand Tournaments around the globe on the Dota Pro Circuit, featuring 2
                  Regional Leagues across 6 different regions as well as 2 majors that all offer DPC
                  Points to determine <span>the 12 direct invites</span> to The International.
                </p>
              </RankInfoPopWrap>
            )}
          </RankTitle>
          <RankTextUl>
            <li>#P</li>
            <li>Team</li>
            <li>Points</li>
          </RankTextUl>

          {rankData
            ? rankData.map((item) => {
                if (item.rank === 1) {
                  return (
                    <RankRowUl key={item.team}>
                      <li>
                        <img src={CrownI} alt="1" />
                      </li>
                      <li className="team">{item.team}</li>
                      <li>{item.points}</li>
                    </RankRowUl>
                  );
                }
                return (
                  <RankRowUl key={item.team}>
                    <li>{item.rank}</li>
                    <li className="team">{item.team}</li>
                    <li>{item.points}</li>
                  </RankRowUl>
                );
              })
            : null}
        </Rank>
      </HotTourRankWrap>
    </>
  );
};

export default MainContent;
