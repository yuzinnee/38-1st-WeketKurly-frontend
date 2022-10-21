import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import './CartItem.scss';
const CartItem = props => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count => count + 1);
  };

  const decreaseCount = () => {
    setCount(count => count - 1);
  };

  return (
    <div className="cartItem">
      <img
        className="cartItemImg"
        src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1634631825670l0.jpg"
        alt="상품이미지"
      />
      <div className="cartItemName">item</div>
      <div className="cartItemCountBox">
        <div className="cartItemCount">
          {count <= 1 ? (
            <AiOutlineMinus
              className="cartMinusIcon"
              style={{ color: 'lightGray' }}
            />
          ) : (
            <AiOutlineMinus className="cartMinusIcon" onClick={decreaseCount} />
          )}
          <p className="cartCounts">{count}</p>
          <AiOutlinePlus className="cartPlusIcon" onClick={increaseCount} />
        </div>
      </div>
      <div className="cartItemPrice">price</div>
      <div className="cartItemIcon">icon</div>
    </div>
  );
};

export default CartItem;
