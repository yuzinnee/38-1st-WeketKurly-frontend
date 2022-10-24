import React, { useState, useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import './CartItem.scss';

const CartItem = props => {
  const [quantity, setQuantity] = useState(props?.quantity);

  const timerRef = useRef(0);

  const token = localStorage.getItem('token');

  const increaseCount = () => {
    setQuantity(quantity => quantity + 1);
  };

  const decreaseCount = () => {
    setQuantity(quantity => quantity - 1);
  };

  const updateItem = quantity => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      fetch(`http://10.58.52.89:3000/carts/:${props?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          quantity: quantity,
        }),
      }).catch(error => alert(error));
    }, 500);
  };

  return (
    <div className="cartItem">
      <img
        className="cartItemImg"
        src={props?.thumnail_image_url}
        alt="상품이미지"
      />
      <div className="cartItemName">{props?.name}</div>
      <div className="cartItemCountBox">
        <div className="cartItemCount">
          {props?.quantity <= 1 ? (
            <AiOutlineMinus style={{ color: 'lightGray' }} />
          ) : (
            <AiOutlineMinus
              className="cartCountIcon"
              onClick={() => {
                decreaseCount();
                updateItem(quantity);
              }}
            />
          )}
          <p className="cartCounts">{quantity}</p>
          <AiOutlinePlus
            className="cartCountIcon"
            onClick={() => {
              increaseCount();
              updateItem(quantity);
            }}
          />
        </div>
      </div>
      <div className="cartItemPrice">{props?.price + `원`}</div>
      <TiDeleteOutline className="deleteIcon" />
    </div>
  );
};

export default CartItem;
