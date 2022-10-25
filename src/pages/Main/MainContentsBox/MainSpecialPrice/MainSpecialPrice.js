import React, { useState, useEffect } from 'react';
import Item from '../../../../components/Item/Item';
import Modal from '../../../../components/Modal/Modal';
import API from '../../../../config';
import './MainSpecialPrice.scss';

const MainSpecialPrice = () => {
  const [itemList, setItemList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch(`${API.mainTimeDeal}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data.item);
      });
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date('2022-10-28T24:00:00') - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <div className="mainSpecialPrice">
      <div className="specialTimeBox">
        <p className="specialDailyText">일일특가</p>
        <p className="specialGrayText">24시간 한정 특가</p>
        <span className="specialTimer">{timeLeft.hours}:</span>
        <span className="specialTimer">
          {timeLeft.minutes < 10
            ? '0' + timeLeft.minutes + ':'
            : timeLeft.minutes + ':'}
        </span>
        <span className="specialTimer">
          {timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}
        </span>
        <p className="specialLgrayText">망설이면 늦어요!</p>
      </div>
      {itemList.map(item => (
        <Item type="discount" contents={item} key={item.productId} />
      ))}
      {openModal && <Modal type="cart" />}
    </div>
  );
};

export default MainSpecialPrice;
