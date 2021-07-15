import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { storage } from '../../firebase/firestore';
import MainContent from './components/MainContent';
import PrizePool from './components/PrizePool';

const Wrap = styled.div`
  min-width: 1200px;
  height: 1800px;
  background: transparent
    linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%)
    0% 0% no-repeat padding-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;

  @media (max-width: 1199px) {
    min-width: 700px;
  }

  @media (max-width: 699px) and (min-width: 360px) {
    min-width: 360px;
  }
`;

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
      {/* <div>HP</div>
      <video src={main} autoPlay preload="auto" loop style={{ width: '100%' }}>
        <track kind="captions" />
      </video> */}
      {/* <PrizePool /> */}
      <MainContent />
    </Wrap>
  );
};

export default HomePage;
