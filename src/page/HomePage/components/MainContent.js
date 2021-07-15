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
  db.collection('dpc_rank')
    .orderBy('rank', 'asc')
    .get()
    .then((res) => {
      res.forEach((doc) => {
        console.log(doc.data().rank);
      });
    });

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
            <li>名次</li>
            <li>隊伍</li>
            <li>當前積分</li>
          </RankTextUl>
          <RankRowUl>
            <li>1</li>
            <li>LGD</li>
            <li>1700</li>
          </RankRowUl>
        </Rank>
      </HotTourRankWrap>
    </>
  );
};

export default MainContent;
