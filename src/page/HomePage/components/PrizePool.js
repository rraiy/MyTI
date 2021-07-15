import React from 'react';
import { AreaClosed, Line, Bar } from '@vx/shape';
import appleStock, { AppleStock } from '@vx/mock-data/lib/mocks/appleStock';
import { curveMonotoneX } from '@vx/curve';
import { GridRows, GridColumns } from '@vx/grid';
import { scaleTime, scaleLinear } from '@vx/scale';
import { localPoint } from '@vx/event';
import { LinearGradient } from '@vx/gradient';
import { PrizePoolWrap, PrizePoolTitle } from '../css/PrizePoolSty';

const data = [
  {
    year: 2014,
    total_prize: 10931105,
  },
  {
    year: 2015,
    total_prize: 18429613,
  },
  {
    year: 2016,
    total_prize: 20770460,
  },
  {
    year: 2017,
    total_prize: 24787916,
  },
];

// const dataY =

const PrizePool = () => {
  return (
    <PrizePoolWrap>
      <PrizePoolTitle>Prize Pool</PrizePoolTitle>
      <svg width="500px" height="400px">
        <LinearGradient id="axis-gradient" from="#fff" to="#red" />
      </svg>
    </PrizePoolWrap>
  );
};

export default PrizePool;
