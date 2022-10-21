import React, { useState } from 'react';
import './CartList.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const CartList = ({ list }) => {
  const [openlist, setOpenlist] = useState(true);

  return (
    <div className="cartList">
      <div className="cartListDropTab">
        <div className="cartListIconBox">
          {list.icon}
          <p className="cartListText">{list.type}</p>
        </div>
        {openlist === true ? (
          <IoIosArrowUp
            className="arrowIcon"
            onClick={() => {
              setOpenlist(!openlist);
            }}
          />
        ) : (
          <IoIosArrowDown
            className="arrowIcon"
            onClick={() => {
              setOpenlist(!openlist);
            }}
          />
        )}
      </div>
      {openlist && (
        <div className="cartItemList">
          <div className="cartItem">
            <img
              className="cartItemImg"
              src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1634631825670l0.jpg"
              alt="상품이미지"
            />
            <div className="cartItemName">item</div>
            <div className="cartItemCountBox">count</div>
            <div className="cartItemPrice">price</div>
            <div className="cartItemIcon">icon</div>
          </div>
          <div className="cartItem">
            <img
              className="cartItemImg"
              src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1634631825670l0.jpg"
              alt="상품이미지"
            />
            <div className="cartItemName">item</div>
            <div className="cartItemCountBox">count</div>
            <div className="cartItemPrice">price</div>
            <div className="cartItemIcon">icon</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
