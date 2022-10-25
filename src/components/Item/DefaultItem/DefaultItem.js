import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DefaultItem.scss';

const DefaultItem = ({ contents, openModal, setOpenModal }) => {
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
          setOpenModal(true);
        }}
      >
        <BsCart2 className="reactIcon" />
      </div>
      <p className="itemDescription">{contents?.productName}</p>
      <p className="itemPrice">{contents?.price + `원`}</p>
    </div>
  );
};

export default DefaultItem;
