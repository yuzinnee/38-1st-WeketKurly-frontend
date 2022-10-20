import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import './Item.scss';
const Item = ({ type, imgUrl, item, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (type === '할인특가') {
    return (
      <div className="disItemContainer">
        <img
          className="disItemImg"
          src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1650258085245l0.jpg"
          // src={imgUrl}
          alt="상품 이미지"
        />
        <div
          className="disItemIconBox"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <BsCart2 className="disItemIcon" />
        </div>
        <div className="disItemSpecialBox">
          <p className="disItemSpecialText">일일특가</p>
        </div>
        <p className="disItemDescription">
          [더오담] 포켓 쏙 현미 누룽지 (국내산)
        </p>
        <p className="disItemPrice">7,980원</p>
        {/* <p className="disItemDescription">{item}</p> */}
        {/* <p className="disItemPrice">{price}</p> */}
      </div>
    );
  } else {
    return (
      <div className="itemContainer">
        <img
          className="itemImg"
          src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1650258085245l0.jpg"
          alt="상품 이미지"
        />
        <div
          className="itemIconBox"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <BsCart2 className="disItemIcon" />
        </div>
        <p className="itemDescription">[더오담] 포켓 쏙 현미 누룽지 (국내산)</p>
        <p className="itemPrice">7,980원</p>
        {/* <p className="itemDescription">{item}</p>
        <p className="itemPrice">{price}</p> */}
      </div>
    );
  }
};

export default Item;
