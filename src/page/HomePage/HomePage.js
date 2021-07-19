import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db, storage } from '../../firebase/firestore';
import MainContent from './components/MainContent';
import PrizePool from './components/PrizePool';
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
} from './css/HomePage';
// import { formatTourDate } from '../../public_component/setDataToDatabase';

const webInfoData = [
  {
    title: 'Tour Calendar',
    text: 'Custom your own tour date, do not miss any matches.',
    item: ['Average Minute Audience', 'Peak viewers', 'Unique Viewers', 'Hours Watched'],
  },
  {
    title: 'Reports',
    text: 'Analyzing around 100 metrics for events, teams, games and more.',
    item: ['Average Minute Audience', 'Peak viewers', 'Unique Viewers', 'Hours Watched'],
  },
  {
    title: 'Reports',
    text: 'Analyzing around 100 metrics for events, teams, games and more.',
    item: ['Average Minute Audience', 'Peak viewers', 'Unique Viewers', 'Hours Watched'],
  },
  {
    title: 'Reports',
    text: 'Analyzing around 100 metrics for events, teams, games and more.',
    item: ['Average Minute Audience', 'Peak viewers', 'Unique Viewers', 'Hours Watched'],
  },
];

const HomePage = () => {
  const [main, setMain] = useState(null);

  useEffect(() => {
    storage
      .ref('background')
      .child('ti10_main.mp4')
      .getDownloadURL()
      .then((url) => setMain(url));
  }, []);

  // https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/background%2Fti10_main.mp4?alt=media&token=c2ebd13d-ae66-47ed-a7b2-952f28033756

  return (
    <Wrap>
      <AegisVideo src={main} autoPlay preload="auto" loop style={{ width: '100%' }}>
        <track kind="captions" />
      </AegisVideo>
      <WebInfoWrap>
        <H1>Follow your ONE team, be the big fans to support !</H1>
        <p>
          MyTI is a web for collecting information about Dota2 The International tournaments,
          <br />
          streaming and recording your team's matches.
        </p>
        <WebInfoCardUl>
          {webInfoData.map((d) => {
            return (
              <WebInfoCardLi>
                <H3>{d.title}</H3>
                <p>{d.text}</p>
                <InfoListUl>
                  {d.item.map((list) => {
                    return <InfoListLi>{list}</InfoListLi>;
                  })}
                </InfoListUl>
              </WebInfoCardLi>
            );
          })}
        </WebInfoCardUl>
      </WebInfoWrap>
      <MainContent />
      <PrizePool />
    </Wrap>
  );
};

export default HomePage;
