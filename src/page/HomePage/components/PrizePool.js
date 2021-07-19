import React from 'react';
import { AreaClosed, Line, LinePath, Bar } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { GridRows, GridColumns } from '@vx/grid';
import { scaleTime, scaleLinear } from '@vx/scale';
import { localPoint } from '@vx/event';
import { LinearGradient } from '@vx/gradient';
import { Group } from '@vx/group';
import { Axis, AxisBottom } from '@vx/axis';
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
  const margin = { top: 10, right: 35, bottom: 20, left: 40 };
  const width = 600;
  const height = 400;

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const x = (d) => d.year;
  const y = (d) => d.total_prize;

  const scaleX = scaleLinear({
    range: [0, 200],
    round: true,
    domain: [2014, 2017],
  });

  const scaleY = scaleLinear({
    range: [yMax, 0],
    domain: [0, Math.max(...data.map(y))],
  });

  const compose = (s, a) => (data) => s(a(data));

  const pointX = compose(scaleX, x);
  const pointY = compose(scaleY, y);

  return (
    <PrizePoolWrap>
      <PrizePoolTitle>Prize Pool</PrizePoolTitle>
      <svg width={width} height={height}>
        {data.map((d, i) => {
          const barHeight = yMax - pointY(d);
          return (
            <Group top={margin.top} left={width / 2}>
              <Bar x={pointX(d)} y={yMax - barHeight} height={barHeight} width="15px" />
            </Group>
          );
        })}
        <AxisBottom
          top={yMax + margin.top}
          scale={scaleX}
          // tickFormat={}
          stroke="red"
          // tickStroke={purple3}
          // tickLabelProps={() => ({
          //   fill: purple3,
          //   fontSize: 11,
          //   textAnchor: 'middle',
          // })}
        />
      </svg>
    </PrizePoolWrap>
  );
};

export default PrizePool;
