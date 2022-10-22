import React, { useEffect, useState, useRef } from 'react';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';
import './ItemCarousel.scss';

const ItemCarousel = ({ contents, title }) => {
  const [slide, setSlide] = useState(0);

  const [itemList, setItemList] = useState([]);

  const slideRef = useRef(null);

  const page = Math.ceil(itemList.length / 4);

  useEffect(() => {
    fetch('data/DATA.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data.itemCarousel);
      });
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.4s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slide * 40.3}%)`;
  }, [slide]);

  const showNextSlide = () => {
    setSlide(slide => slide + 1);
  };
  const showPrevSlide = () => {
    setSlide(slide => slide - 1);
  };

  return (
    <div className="itemCarousel">
      <p className="itemTitle">{title}</p>
      <div className="itemCarouselBox">
        <div className="itemList" ref={slideRef}>
          {itemList.map(item => (
            <div className="items" key={item.id}>
              <img src={item.img} width="249px" alt="테스트 사진" />
            </div>
          ))}
        </div>
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

export default ItemCarousel;
