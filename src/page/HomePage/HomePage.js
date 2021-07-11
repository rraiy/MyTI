import React, { useState } from 'react';
import styled from 'styled-components';
import { storage } from '../../firebase/firestore';

const Wrap = styled.div`
    min-width: 1200px;
    height: 1800px;
    background: transparent
        linear-gradient(
            180deg,
            rgba(7, 0, 28, 1) 0%,
            rgba(24, 15, 51, 1) 34%,
            rgba(58, 45, 96, 1) 100%
        )
        0% 0% no-repeat padding-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

    @media (max-width: 1199px) {
        min-width: 700px;
    }

    @media (max-width: 699px) and (min-width: 360px) {
        min-width: 360px;
    }
`;

const HomePage = () => {
    const [main, setMain] = useState(null);
    storage
        .ref('background')
        .child('ti10_main.mp4')
        .getDownloadURL()
        .then((url) => setMain(url));

    return (
        <Wrap>
            <div>HP</div>
            <video src={main} autoPlay="true" preload="auto" loop style={{ width: '100%' }}>
                <track kind="captions" />
            </video>
        </Wrap>
    );
};

export default HomePage;
