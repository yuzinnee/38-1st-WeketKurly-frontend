import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DefaultItem.scss';

const DefaultItem = ({ contents, onOpenModal }) => {
  const priceToString = price => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="itemContainer">
      <img
        className="itemImg"
        src={contents?.thumbnailImageUrl}
        alt="상품 이미지"
      />
      <div
        className="itemIconBox"
        onClick={() => {
          onOpenModal(contents);
        }}
      >
        <BsCart2 className="reactIcon" />
      </div>
      <p className="itemDescription">{contents?.productName}</p>
      <p className="itemPrice">{priceToString(contents?.price) + `원`}</p>
    </div>
  );
};

export default DefaultItem;
