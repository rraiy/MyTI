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
} from '../css/MainContentSty';
import Weplay from '../../../images/tours/weplay.png';
import CrownI from '../../../images/icon/crown.png';

const MainContent = () => {
  const [rankData, setRankData] = useState(null);
  const [lineShow, setLineShow] = useState('hotEvents');

  const changeLine = (area) => {
    setLineShow(area);
  };

  useEffect(() => {
    db.collection('dpc_rank')
      .orderBy('rank', 'asc')
      .limit(10)
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
            <BtnBottomLine show={lineShow} />
            <RecentBtn onClick={() => changeLine('hotEvents')}>Hot Events</RecentBtn>
            <ResultBtn onClick={() => changeLine('results')}>Latest Results</ResultBtn>
          </HotTourTitle>

          {lineShow === 'hotEvents' ? (
            <HotTourWrap>
              <HotTourItem>
                <DateDiv>07.07-07.20</DateDiv>
                <LiveDiv className="live">Live</LiveDiv>
                <img src={Weplay} alt="" />
                <p>Weplay Major!</p>
              </HotTourItem>
              <HotTourItem>
                <img src={Weplay} alt="" />
                <p>Weplay Major!</p>
              </HotTourItem>
              <HotTourItem>
                <img src={Weplay} alt="" />
                <p>Weplay Major!</p>
              </HotTourItem>
              <HotTourItem>
                <img src={Weplay} alt="" />
                <p>Weplay Major!</p>
              </HotTourItem>
            </HotTourWrap>
          ) : null}

          <AllTourBtn type="button">
            <Link to="/tournaments">More Tournaments</Link>
          </AllTourBtn>
        </TourAndResult>

        <Rank>
          <RankTitle>DPC Ranking</RankTitle>
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
