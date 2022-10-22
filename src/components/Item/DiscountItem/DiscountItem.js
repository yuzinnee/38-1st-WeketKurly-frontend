import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DiscountItem.scss';

const DiscountItem = ({ contents }) => {
  return (
    <div className="disItemContainer">
      <img
        className="disItemImg"
        src={contents?.item?.thumbnailImageUrl}
        alt="상품 이미지"
      />
      <div className="disItemIconBox">
        <BsCart2 className="reactIcon" />
      </div>

      <div className="disItemSpecialBox">
        <p className="disItemSpecialText">일일특가</p>
      </div>

      <p className="disItemDescription">{contents?.item?.productName}</p>
      <p className="disItemPrice">{contents?.item?.price}</p>
    </div>
  );
};

export default DiscountItem;
