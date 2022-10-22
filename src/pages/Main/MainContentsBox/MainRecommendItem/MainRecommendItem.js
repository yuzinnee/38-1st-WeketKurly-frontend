import React from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import './MainRecommendItem.scss';

const MainRecommendItem = () => {
  return (
    <div className="mainRecommendItem">
      <Carousel type="item" contents="이 상품은 어때요?" />
    </div>
  );
};

export default MainRecommendItem;
