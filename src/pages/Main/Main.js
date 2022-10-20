import React from 'react';
import Nav from '../../components/Nav';
import MainBannerCarousel from './MainBannerCarousel/MainBannerCarousel';
import MainContentsBox from './MainContentsBox/MainContentsBox';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <MainBannerCarousel />
      <MainContentsBox />
    </div>
  );
};

export default Main;
