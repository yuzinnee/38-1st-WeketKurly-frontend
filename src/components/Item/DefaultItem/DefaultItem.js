import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DefaultItem.scss';

const DefaultItem = ({ contents }) => {
  return (
    <div className="itemContainer">
      <img className="itemimg" src={contents?.imgUrl} alt="상품 이미지" />
      <div className="itemIconBox">
        <BsCart2 className="reactIcon" />
      </div>
      <p className="itemDescription">{contents?.item}</p>
      <p className="itemPrice">{contents?.price}</p>
    </div>
  );
};

export default DefaultItem;
