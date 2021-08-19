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
import {
  PrizePoolWrap,
  PrizePoolTitle,
  H1,
  ChartWrap,
  ChartContentWrap,
  ContentUl,
  ContentLi,
  PrizeTextWrap,
} from '../css/PrizePoolSty';
import listI from '../../../images/icon/shield_bg_sm.png';

const prizeData = [
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
    total_prize: 40018195,
  },
];

const content = [
  {
    text: 'This chart aims to keep track of the Dota2 TI tournament.',
  },
  {
    text: "Make use of the prize pool funding system that uses sales from the tournament's Dota TV tickets/bundles in order to increase their overall prize pool.",
  },
  {
    text: 'The tournament was originally scheduled to be held from August 18th to 23rd, 2020 in Avicii Arena in Stockholm, Sweden. Due to the COVID-19 pandemic, Valve delayed the event to 2021 tentatively.',
  },
];

const margin = { top: 20, right: 80, bottom: 20, left: 80 };
const width = 700;
const height = 500;

/* Format Data */
const parseDate = d3.timeParse('%Y');
const data = prizeData.map((d) => {
  return {
    year: parseDate(d.year),
    total_prize: +d.total_prize,
  };
});

const PrizePool = ({ hidePrizeChart }) => {
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
  }, [hidePrizeChart]);

  return (
    <PrizePoolWrap>
      <H1>The International Prize Pool</H1>
      <ChartContentWrap>
        {hidePrizeChart ? (
          <PrizeTextWrap>
            {prizeData.map((item, index) => {
              return (
                <li key={index} className={item.year}>
                  <p>{item.year}</p>
                  <p>{`Prize：${item.total_prize}`}</p>
                </li>
              );
            })}
          </PrizeTextWrap>
        ) : (
          <ChartWrap>
            <svg ref={chartRef}></svg>
          </ChartWrap>
        )}

        <ContentUl>
          {content.map((item) => {
            return (
              <ContentLi key={item.text}>
                <img src={listI} alt="prize list" />
                <p>{item.text}</p>
              </ContentLi>
            );
          })}
        </ContentUl>
      </ChartContentWrap>
    </PrizePoolWrap>
  );
};

export default PrizePool;
