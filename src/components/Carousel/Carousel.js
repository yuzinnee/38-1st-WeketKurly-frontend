import React from 'react';
import BannerCarousel from './BannerCarousel/BannerCarousel';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import './Carousel.scss';

const Carousel = ({ type, contents, title }) => {
  const carousel = {
    banner: <BannerCarousel />,
    item: <ItemCarousel contents={contents} title={title} />,
  };
  return <>{carousel[type]}</>;
};

export default Carousel;
