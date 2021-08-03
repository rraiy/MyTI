import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase/firestore';
import MainContent from './components/MainContent';
import PrizePool from './components/PrizePool';
import WorldMap from './components/WorldMap';
import {
  Wrap,
  WebInfoWrap,
  H1,
  AegisVideo,
  WebInfoCardUl,
  WebInfoCardLi,
  H3,
  InfoListUl,
  InfoListLi,
  lineImgWrap,
} from './css/HomePageSty';
import checkI from '../../images/icon/check.png';
import lineImg from '../../images/background/bg_line.png';

const webInfoData = [
  {
    title: 'Tour Calendar',
    text: 'Custom your own tour date, do not miss any matches.',
    item: ['Add tours date', 'Delete tours', 'Member Page'],
  },
  {
    title: 'Chat Room',
    text: 'Chat with other fans while match on a stream, it will show the logo if you set the favorite team.',
    item: ['Stream Page', 'Register and login to use', 'Support your Team'],
  },
  {
    title: 'Statics',
    text: 'Show the important information about The International, help you get the latest news',
    item: ['Prize Pool', 'Qualifier Team', 'DPC Ranking', 'All Tournaments states'],
  },
];

const HomePage = () => {
  const [main, setMain] = useState(null);
  const [hidePrizeChart, setHidePrizeChart] = useState(false);
  const [hideMap, setHideMap] = useState(false);
  const [hideRedBottomLine, setHideRedBottomLine] = useState(false);

  function checkBrowserWidth() {
    if (window.innerWidth <= 1100) {
      setHideMap(true);
      setHideRedBottomLine(true);
    }
    if (window.innerWidth > 1100) {
      setHideMap(false);
      setHideRedBottomLine(false);
    }

    if (window.innerWidth <= 800) {
      setHidePrizeChart(true);
    }

    if (window.innerWidth > 800) {
      setHidePrizeChart(false);
    }
  }

  useEffect(() => {
    storage
      .ref('background')
      .child('ti10_main.mp4')
      .getDownloadURL()
      .then((url) => setMain(url));

    if (window.innerWidth <= 1100) {
      setHideMap(true);
      setHideRedBottomLine(true);
    }

    if (window.innerWidth <= 800) {
      setHidePrizeChart(true);
    }

    window.addEventListener('resize', checkBrowserWidth);

    return () => {
      window.removeEventListener('resize', checkBrowserWidth);
    };
  }, []);

  return (
    <Wrap>
      <AegisVideo src={main} autoPlay preload="auto" loop style={{ width: '100%' }}>
        <track kind="captions" />
      </AegisVideo>
      {/* <lineImgWrap>
        <img src={lineImg} alt="background" />
      </lineImgWrap> */}

      <WebInfoWrap>
        <H1>
          Follow your ONE team,
          <br />
          be the big fans to support !
        </H1>
        <p>
          MyTI is a web for collecting information about Dota2 The International tournaments,
          <br />
          streaming and recording your team's matches.
        </p>
        <WebInfoCardUl>
          {webInfoData.map((d) => {
            return (
              <WebInfoCardLi key={d.title}>
                <H3>{d.title}</H3>
                <p>{d.text}</p>
                <InfoListUl>
                  {d.item.map((list, index) => {
                    return (
                      <InfoListLi key={index}>
                        <img src={checkI} alt="check icon" />
                        <p>{list}</p>
                      </InfoListLi>
                    );
                  })}
                </InfoListUl>
              </WebInfoCardLi>
            );
          })}
        </WebInfoCardUl>
      </WebInfoWrap>
      <MainContent hideRedBottomLine={hideRedBottomLine} />
      <PrizePool hidePrizeChart={hidePrizeChart} />
      <WorldMap hideMap={hideMap} />
    </Wrap>
  );
};

export default HomePage;
