import React from 'react';
import { Link } from 'react-router-dom';
import { Wrap, TitleDiv, P, Logo, H1, TourButton, TourI } from './css/HeaderSty';
import dotaLogo from '../../../images/dota2_logo.png';
import tourIcon from '../../../images/icon/tour.png';

const test123 = '123';

const Header = () => {
  console.log(test123);
  return (
    <Wrap>
      <TitleDiv>
        <P>
          <Logo src={dotaLogo} />
          DOTA2
        </P>

        <H1>2021 The International</H1>
      </TitleDiv>
      <Link to="/tournaments">
        <TourButton>
          <TourI src={tourIcon} alt="" />
          <p>Tournaments</p>
        </TourButton>
      </Link>
    </Wrap>
  );
};

export default Header;
