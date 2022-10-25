import React, { useState, useEffect } from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import Modal from '../../../../components/Modal/Modal';
import API from '../../../../config';
import './MainRecommendItem.scss';

const MainRecommendItem = () => {
  const [itemList, setItemList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch('/data/DATA.json', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  }, []);

  console.log(itemList);

  return (
    <div className="mainRecommendItem">
      <Carousel
        type="item"
        title="이 상품은 어때요?"
        contents={itemList}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default MainRecommendItem;
