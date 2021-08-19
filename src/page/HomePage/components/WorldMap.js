import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { map } from 'd3';
import {
  WorldMapWrap,
  MapSvg,
  H1,
  ContentMapWrap,
  ContentUl,
  ContentLi,
  QualifiersPhoneUl,
  TeamLogoDiv,
} from '../css/WorldMapSty';
import listI from '../../../images/icon/shield_bg_sm.png';

const margin = { top: 0, right: 0, bottom: 0, left: 0 };
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const qualifierTeam = [
  {
    regional: 'Eastern Europe',
    team: 'Team Spirit',
    className: 'qualifier EE',
    url: 'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FTeam_Spirit.png?alt=media&token=1f7c40c9-96d4-4cad-934b-caa289c02202',
  },
  {
    regional: 'Southeast Asia',
    team: 'Fnatic',
    className: 'qualifier SAS',
    url: 'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FFnatic.png?alt=media&token=d40c14dd-2308-49c9-a350-e6effc5e6a07',
  },
  {
    regional: 'China',
    team: 'Elephant',
    className: 'qualifier CH',
    url: 'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FElephant.png?alt=media&token=a0c140da-7cc0-4dc8-a3ec-17e856d13e5b',
  },
  {
    regional: 'South America',
    team: 'SG e-sports',
    className: 'qualifier SAM',
    url: 'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FSG.png?alt=media&token=75742b1a-f56c-47f8-a531-21911dbf2e53',
  },
  {
    regional: 'North America',
    team: 'Undying',
    className: 'qualifier NA',
    url: 'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FUndying.png?alt=media&token=ed244e2b-c0d2-43e7-bdea-f90e357398b5',
  },
  {
    regional: 'Western Europe',
    team: 'OG',
    className: 'qualifier WE',
    url: 'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FOG.png?alt=media&token=4896ad91-ae40-4446-9035-5134473b2a7b',
  },
];

const qualifierContent = [
  {
    text: ' Event Date : June 23rd - July 10th, 2021',
  },
  {
    text: "All teams that participated in season 2 of the regional league that aren’t qualified to The International 10 by finishing top 12 in DPC rankings are invited provided that they did not replace more than two players from their last season's team.",
  },
  {
    text: 'The teams are seeded based on their DPC point total followed by their standing in the final season of the regional league',
  },
];

const WorldMap = ({ hideMap }) => {
  const mapRef = useRef();
  useEffect(() => {
    const svg = d3.select(mapRef.current).attr('width', width).attr('height', height);

    // Map and projection
    const projection = d3
      .geoMercator()
      .scale(100)
      .center([0, 30])
      .translate([width / 2, height / 2]);

    // Data and color scale
    let data = new Map();
    const colorScale = d3
      .scaleThreshold()
      .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
      .range(d3.schemePurples[3]);

    // Load external data and boot
    Promise.all([
      d3.json(
        'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson',
      ),
      d3.csv(
        'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv',
        function (d) {
          data.set(d.code, +d.pop);
        },
      ),
    ]).then(function (loadData) {
      let topo = loadData[0];

      // Draw the map
      svg
        .append('g')
        .selectAll('path')
        .data(topo.features)
        .join('path')
        // draw each country
        .attr('d', d3.geoPath().projection(projection))
        // set the color of each country
        .attr('fill', function (d) {
          d.total = data.get(d.id) || 0;
          return colorScale(d.total);
        });

      const qualG = svg.append('g');

      // east euro
      qualG
        .append('image')
        .attr(
          'xlink:href',
          'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FTeam_Spirit.png?alt=media&token=1f7c40c9-96d4-4cad-934b-caa289c02202',
        )
        .attr('x', '67%')
        .attr('y', '21%')
        .attr('width', '60');

      qualG
        .append('text')
        .attr('x', '65%')
        .attr('y', '20%')
        .attr('fill', 'white')
        .text('Eastern Europe');

      // SAS
      qualG
        .append('image')
        .attr(
          'xlink:href',
          'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FFnatic.png?alt=media&token=d40c14dd-2308-49c9-a350-e6effc5e6a07',
        )
        .attr('x', '62%')
        .attr('y', '67%')
        .attr('width', '60');

      qualG
        .append('text')
        .attr('x', '60%')
        .attr('y', '65%')
        .attr('fill', 'white')
        .text('Southeast Asia');

      // china

      qualG
        .append('image')
        .attr(
          'xlink:href',
          'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FElephant.png?alt=media&token=a0c140da-7cc0-4dc8-a3ec-17e856d13e5b',
        )
        .attr('x', '67%')
        .attr('y', '47%')
        .attr('width', '70');

      qualG.append('text').attr('x', '68%').attr('y', '45%').attr('fill', 'white').text('China');

      // SAM
      qualG
        .append('image')
        .attr(
          'xlink:href',
          'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FSG.png?alt=media&token=75742b1a-f56c-47f8-a531-21911dbf2e53',
        )
        .attr('x', '28%')
        .attr('y', '72%')
        .attr('width', '60');

      qualG
        .append('text')
        .attr('x', '25%')
        .attr('y', '70%')
        .attr('fill', 'white')
        .text('South America');

      // NA
      qualG
        .append('image')
        .attr(
          'xlink:href',
          'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FUndying.png?alt=media&token=ed244e2b-c0d2-43e7-bdea-f90e357398b5',
        )
        .attr('x', '17%')
        .attr('y', '42%')
        .attr('width', '60');

      qualG
        .append('text')
        .attr('x', '15%')
        .attr('y', '40%')
        .attr('fill', 'white')
        .text('North America');

      // WE
      qualG
        .append('image')
        .attr(
          'xlink:href',
          'https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/team_logo%2Fsmall%2FOG.png?alt=media&token=4896ad91-ae40-4446-9035-5134473b2a7b',
        )
        .attr('x', '52%')
        .attr('y', '27%')
        .attr('width', '50');
      qualG
        .append('text')
        .attr('x', '48%')
        .attr('y', '25%')
        .attr('fill', 'white')
        .text('Western Europe');
    });
  }, [hideMap]);

  return (
    <WorldMapWrap>
      <H1>TI10 Regional Qualifiers</H1>
      <ContentMapWrap>
        <ContentUl>
          {qualifierContent.map((item) => {
            return (
              <ContentLi key={item.text}>
                <img src={listI} alt="" />
                <p>{item.text}</p>
              </ContentLi>
            );
          })}
        </ContentUl>
        {hideMap ? (
          <QualifiersPhoneUl>
            {qualifierTeam.map((item) => {
              return (
                <li key={item.regional} className={item.className}>
                  <h3>{item.regional}</h3>
                  <TeamLogoDiv>
                    <img src={item.url} alt={`${item.team} logo`} />
                  </TeamLogoDiv>
                  <p>{item.team}</p>
                </li>
              );
            })}
          </QualifiersPhoneUl>
        ) : (
          <div>
            <MapSvg ref={mapRef}></MapSvg>
          </div>
        )}
      </ContentMapWrap>
    </WorldMapWrap>
  );
};

export default WorldMap;
