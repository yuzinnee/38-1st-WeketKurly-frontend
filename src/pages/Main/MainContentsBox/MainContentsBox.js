import React from 'react';
import MainRecommendItem from './MainRecommendItem/MainRecommendItem';
import MainSubBanner from './MainSubBanner/MainSubBanner';
import MainSpecialPrice from './MainSpecialPrice/MainSpecialPrice';
import MainFilterItem from './MainFilterItem/MainFilterItem';
import './MainContentsBox.scss';

const MainContentsBox = () => {
  return (
    <div className="mainContentsBox">
      <MainRecommendItem />
      <MainSubBanner />
      <MainSpecialPrice />
      <MainFilterItem />
    </div>
  );
};

export default MainContentsBox;
