import React from 'react';
import BannerCarousel from './BannerCarousel/BannerCarousel';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import './Carousel.scss';

const Carousel = ({ type, contents }) => {
  const carousel = {
    banner: <BannerCarousel contents={contents} />,
    item: <ItemCarousel contents={contents} />,
  };
  return <>{carousel[type]}</>;
};

export default Carousel;
