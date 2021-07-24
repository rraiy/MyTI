import React, { useRef, useEffect } from 'react';
// import { AreaClosed, Line, LinePath, Bar } from '@vx/shape';
// import { curveMonotoneX } from '@vx/curve';
// import { GridRows, GridColumns } from '@vx/grid';
// import { scaleTime, scaleLinear } from '@vx/scale';
// import { localPoint } from '@vx/event';
// import { LinearGradient } from '@vx/gradient';
// import { Group } from '@vx/group';
// import { Axis, AxisBottom } from '@vx/axis';
import * as d3 from 'd3';
import { PrizePoolWrap, PrizePoolTitle, H1, ChartWrap } from '../css/PrizePoolSty';

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

const margin = { top: 20, right: 80, bottom: 20, left: 80 };
const width = 800;
const height = 500;

/* Format Data */
const parseDate = d3.timeParse('%Y');
data.forEach((d) => {
  d.year = parseDate(d.year);
  d.total_prize = +d.total_prize;
});

const PrizePool = () => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // scale
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.year))
      .rangeRound([0, width - margin.left - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([10000000, d3.max(data.map((d) => d.total_prize))])
      .nice()
      .range([height - margin.top - margin.bottom, 0]);

    // axis & text
    svg
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom - margin.top})`)
      .attr('class', 'axis axis-x')
      .attr('text-anchor', 'middle')
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .call(d3.axisLeft(yScale).ticks(3))
      .attr('class', 'axis axis-y')
      .append('text')
      .attr('y', 15)
      .attr('transform', 'rotate(-90)')
      .attr('fill', 'rgb(168,73,237)')
      .text('Amount(USD)');

    // path
    svg
      .append('path')
      .datum(data)
      // .attr('transform', 'translate(10,10)')
      .attr('fill', 'none')
      .attr('stroke', 'yellow')
      .attr('stroke-width', 2)
      .attr(
        'd',
        d3
          .line()
          .x((d) => xScale(d.year))
          .y((d) => yScale(d.total_prize)),
      );

    // event function
    const mouseover = function (e, d) {
      console.log(parseInt(e.target.attributes.cx.value, 10) + 10);
      svg
        .append('text')
        .text(d.total_prize)
        .attr('x', `${parseInt(e.target.attributes.cx.value, 10) + 10}`)
        .attr('y', `${parseInt(e.target.attributes.cy.value, 10) + 10}`)
        .attr('fill', '#fff')
        .attr('id', 'tooltip');
    };

    const mouseleave = function (e, d) {
      d3.select('#tooltip').remove();
    };

    // circle
    svg
      .append('g')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'circle')
      .attr('fill', '#BC4593')
      .attr('cx', (d) => xScale(d.year))
      .attr('cy', (d) => yScale(d.total_prize))
      .attr('r', 4)
      .on('mouseover', mouseover)
      .on('mouseout', mouseleave);
  }, []);

  return (
    <PrizePoolWrap>
      <H1>Prize Pool</H1>
      <ChartWrap>
        <svg ref={chartRef}></svg>
      </ChartWrap>
    </PrizePoolWrap>
  );
};

export default PrizePool;

// svg
//       .append('g')
//       .selectAll('circle')
//       .data(data)
//       .enter()
//       .append('g')
//       .attr('class', 'circle')
//       .attr('fill', 'purple')
//       .on('mouseover', (d) => {
//         console.log(this);
//         d3.select(this)
//           .style('cursor', 'pointer')
//           .style('fill', 'white')
//           .append('text')
//           .attr('class', 'text')
//           .text(d.total_prize)
//           .attr('x', (d) => xScale(d.year) + 5)
//           .attr('y', (d) => yScale(d.total_prize) - 5);
//       })
//       .on('mouseout', function (d) {
//         d3.select(this).style('cursor', 'none').style('fill', 'purple').select('text').remove();
//       })
//       .append('circle')
//       .attr('cx', (d) => xScale(d.year))
//       .attr('cy', (d) => yScale(d.total_prize))
//       .attr('r', 4);
