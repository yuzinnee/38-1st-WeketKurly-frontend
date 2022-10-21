import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
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
            <AiOutlineMinus style={{ color: 'lightGray' }} />
          ) : (
            <AiOutlineMinus className="cartCountIcon" onClick={decreaseCount} />
          )}
          <p className="cartCounts">{count}</p>
          <AiOutlinePlus className="cartCountIcon" onClick={increaseCount} />
        </div>
      </div>
      <div className="cartItemPrice">8800원</div>
      <TiDeleteOutline className="deleteIcon" />
    </div>
  );
};

export default CartItem;
