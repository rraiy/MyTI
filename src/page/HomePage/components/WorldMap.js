import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { map } from 'd3';
import { WorldMapWrap, MapSvg, H1 } from '../css/WorldMapSty';

const margin = { top: 0, right: 0, bottom: 0, left: 0 };
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const qualifierTeam = [
  {
    regional: 'Eastern Europe',
    team: 'Team Spirit',
    className: 'qualifier EE',
  },
  {
    regional: 'Southeast Asia',
    team: 'Fnatic',
    className: 'qualifier SAS',
  },
  {
    regional: 'China',
    team: 'Elephant',
    className: 'qualifier Ch',
  },
  {
    regional: 'South America',
    team: 'SG e-sports',
    className: 'qualifier SAM',
  },
  {
    regional: 'North America',
    team: 'Undying',
    className: 'qualifier NA',
  },
  {
    regional: 'Western Europe',
    team: 'OG',
    className: 'qualifier WE',
  },
];

const WorldMap = () => {
  const mapRef = useRef();
  // const [landData, setLandData] = useState(null);

  const svg = d3.select(mapRef.current).attr('width', width).attr('height', height);

  // Map and projection
  const path = d3.geoPath();
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
    d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'),
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
      .attr('x', '48%')
      .attr('y', '27%')
      .attr('width', '100');
    qualG
      .append('text')
      .attr('x', '48%')
      .attr('y', '25%')
      .attr('fill', 'white')
      .text('Western Europe');
  });

  // useEffect(() => {}, [landData]);

  return (
    <WorldMapWrap>
      <H1>Regional Qualifiers</H1>
      <div>
        <MapSvg ref={mapRef}>
          {/* {qualifierTeam.map((area) => {
            console.log(area.regional);
            return ( */}
          {/* <g className="qualifier EE">
            <text x="30%" y={100} fill="white">
              america
            </text>
          </g> */}
          {/* ); */}
          {/* })} */}
        </MapSvg>
      </div>
    </WorldMapWrap>
  );
};

export default WorldMap;
