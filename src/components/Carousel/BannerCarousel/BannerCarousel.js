import React, { useEffect, useState, useRef } from 'react';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';
import './BannerCarousel.scss';

const BannerCarousel = () => {
  const [slide, setSlide] = useState(0);

  const [bannerList, setBannerList] = useState([]);

  const slideRef = useRef(null);

  const page = bannerList.length;

  useEffect(() => {
    fetch('http://10.58.52.148:3000/banner/big', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(data => {
        setBannerList(data.message);
      });
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.4s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slide * 100}%)`;
  }, [slide]);

  const showNextSlide = () => {
    setSlide(slide => slide + 1);
  };
  const showPrevSlide = () => {
    setSlide(slide => slide - 1);
  };

  return (
    <div className="bannerCarousel">
      <div className="bannerCarouselBox" ref={slideRef}>
        {bannerList.map((banner, idx) => (
          <img
            className="bannerImg"
            src={banner.image_url}
            alt="배너이미지"
            key={banner.id}
          />
        ))}
      </div>

      {slide !== 0 && (
        <div className="slideMinusBtn" onClick={showPrevSlide}>
          <MdOutlineArrowBackIos className="slideMinusIcon" />
        </div>
      )}
      {slide + 1 !== page && (
        <div className="slidePlusBtn" onClick={showNextSlide}>
          <MdOutlineArrowForwardIos className="slidePlusIcon" />
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
