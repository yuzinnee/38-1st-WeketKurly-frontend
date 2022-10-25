import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DefaultItem.scss';

const DefaultItem = ({ contents }) => {
  return (
    <div className="itemContainer">
      <img
        className="itemimg"
        src={contents?.thumbnailImageUrl}
        alt="상품 이미지"
      />
      <div className="itemIconBox">
        <BsCart2 className="reactIcon" />
      </div>
      <p className="itemDescription">{contents?.productName}</p>
      <p className="itemPrice">{contents?.productPrice + `원`}</p>
    </div>
  );
};

export default DefaultItem;
