import React, { useState, useEffect } from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import './MainRecommendItem.scss';

const MainRecommendItem = () => {
<<<<<<< HEAD
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.148:3000/categories', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data.item);
      });
  }, []);

  return (
    <div className="mainRecommendItem">
      <Carousel type="item" title="이 상품은 어때요?" contents={itemList} />
    </div>
  );
=======
  return <div className="mainRecommendItem"></div>;
>>>>>>> 4ab7bf35c0d373df75e50a3bca7bb6f88df6febd
};

export default MainRecommendItem;
