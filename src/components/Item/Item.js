import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import './Item.scss';
const Item = ({ type, imgUrl, item, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={
        type === 'discountPrice' ? 'disItemContainer' : 'itemContainer'
      }
    >
      <img
        className={type === 'discountPrice' ? 'disItemImg' : 'itemimg'}
        src={imgUrl}
        alt="상품 이미지"
      />
      <div
        className={type === 'discountPrice' ? 'disItemIconBox' : 'itemIconBox'}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <BsCart2 className="reactIcon" />
      </div>
      {type === 'discountPrice' && (
        <div className="disItemSpecialBox">
          <p className="disItemSpecialText">일일특가</p>
        </div>
      )}
      <p
        className={
          type === 'discountPrice' ? 'disItemDescription' : 'itemDescription'
        }
      >
        {item}
      </p>
      <p className={type === 'discountPrice' ? 'disItemPrice' : 'itemPrice'}>
        {price}
      </p>
    </div>
  );
};

export default Item;
