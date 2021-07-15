import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase/firestore';
import {
  HotTourRankWrap,
  HotTour,
  Rank,
  HotTourTitle,
  RecentBtn,
  ResultBtn,
  HotTourWrap,
  HotTourItem,
  RankTitle,
  RankTextUl,
  RankRowUl,
} from '../css/MainContentSty';
import Weplay from '../../../images/tours/weplay.png';

const MainContent = () => {
  const [rankData, setRankData] = useState(null);

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
        <HotTour>
          <HotTourTitle>
            <RecentBtn>近期賽事</RecentBtn>
            <ResultBtn>最新賽果</ResultBtn>
          </HotTourTitle>

          <HotTourWrap>
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
            <HotTourItem>
              <img src={Weplay} alt="" />
              <p>Weplay Major!</p>
            </HotTourItem>
          </HotTourWrap>
        </HotTour>

        <Rank>
          <RankTitle>DPC積分排行</RankTitle>
          <RankTextUl>
            <li>#P</li>
            <li>Team</li>
            <li>Points</li>
          </RankTextUl>

          {rankData
            ? rankData.map((item) => {
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
