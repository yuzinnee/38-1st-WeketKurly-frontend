import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DefaultItem.scss';

const DefaultItem = ({ contents }) => {
  return (
    <div className="itemContainer">
      <img
        className="itemimg"
        src={contents?.item?.thumbnailImageUrl}
        alt="상품 이미지"
      />
      <div className="itemIconBox">
        <BsCart2 className="reactIcon" />
      </div>
      <p className="itemDescription">{contents?.item?.productName}</p>
      <p className="itemPrice">{contents?.item?.price + `원`}</p>
    </div>
  );
};

export default DefaultItem;
