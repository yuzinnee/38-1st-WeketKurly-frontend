import React from 'react';
import './CartItem.scss';
const CartItem = () => {
  return (
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
  );
};

export default CartItem;
