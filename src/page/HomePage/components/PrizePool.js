import React, { useRef, useEffect } from 'react';
import { AreaClosed, Line, LinePath, Bar } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { GridRows, GridColumns } from '@vx/grid';
import { scaleTime, scaleLinear } from '@vx/scale';
import { localPoint } from '@vx/event';
import { LinearGradient } from '@vx/gradient';
import { Group } from '@vx/group';
import { Axis, AxisBottom } from '@vx/axis';
import * as d3 from 'd3';
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
  {
    year: 2018,
    total_prize: 26787916,
  },
  {
    year: 2019,
    total_prize: 30787916,
  },
  {
    year: 2021,
    total_prize: 41787916,
  },
];

const width = 800;
const height = 400;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

const PrizePool = () => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', 'purple')
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // scale
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.year))
      .range([0, width - margin.left - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([10000, d3.max(data.map((d) => d.total_prize))])
      .nice()
      .range([height, 0]);

    // axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom - margin.top})`)
      .attr('text-anchor', 'middle')
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale).ticks(5));

    // path
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 3)
      .attr(
        'd',
        d3
          .line()
          .curve(d3.curveBasis)
          .x((d) => xScale(d.year))
          .y((d) => yScale(d.total_prize)),
      );

    // console.log(y);

    // toRef
    //   .selectAll('rect')
    //   .data(data)
    //   .enter()
    //   .append('rect')
    //   .attr('x', (d, i) => i * 70)
    //   .attr('y', (d) => height - 10 * d)
    //   .attr('width', 40)
    //   .attr('height', (d) => d * 10)
    //   .attr('fill', (d) => (d > 20000000 ? 'tomato' : 'yellow'));
  }, []);

  return (
    <PrizePoolWrap>
      <div>
        <svg ref={chartRef}></svg>
      </div>

      {/* <svg viewBox={(0, 0, width, height)} fill="red" stroke="yellow">
        
      </svg> */}
    </PrizePoolWrap>
  );
};

export default PrizePool;

// const PrizePool = () => {
//   const margin = { top: 10, right: 35, bottom: 20, left: 40 };
//   const width = 600;
//   const height = 400;

//   const xMax = width - margin.left - margin.right;
//   const yMax = height - margin.top - margin.bottom;

//   const x = (d) => d.year;
//   const y = (d) => d.total_prize;

//   const scaleX = scaleLinear({
//     range: [0, 200],
//     round: true,
//     domain: [2014, 2017],
//   });

//   const scaleY = scaleLinear({
//     range: [yMax, 0],
//     domain: [0, Math.max(...data.map(y))],
//   });

//   const compose = (s, a) => (data) => s(a(data));

//   const pointX = compose(scaleX, x);
//   const pointY = compose(scaleY, y);

//   return (
//     <PrizePoolWrap>
//       <PrizePoolTitle>Prize Pool</PrizePoolTitle>
//       <svg width={width} height={height}>
//         {data.map((d, i) => {
//           const barHeight = yMax - pointY(d);
//           return (
//             <Group top={margin.top} left={width / 2}>
//               <Bar x={pointX(d)} y={yMax - barHeight} height={barHeight} width="15px" />
//             </Group>
//           );
//         })}
//         <AxisBottom
//           top={yMax + margin.top}
//           scale={scaleX}
//           // tickFormat={}
//           stroke="red"
//           // tickStroke={purple3}
//           // tickLabelProps={() => ({
//           //   fill: purple3,
//           //   fontSize: 11,
//           //   textAnchor: 'middle',
//           // })}
//         />
//       </svg>
//     </PrizePoolWrap>
//   );
// };
