import React from 'react';
import BannerCarousel from './BannerCarousel/BannerCarousel';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import './Carousel.scss';

const Carousel = ({ type, contents, title, openModal, setOpenModal }) => {
  const carousel = {
    banner: <BannerCarousel />,
    item: (
      <ItemCarousel
        contents={contents}
        title={title}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    ),
  };
  return <>{carousel[type]}</>;
};

export default Carousel;
