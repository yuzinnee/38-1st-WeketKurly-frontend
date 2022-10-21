import React from 'react';
import CartBox from './CartBox/CartBox';
import OrderBox from './OrderBox/OrderBox';
import './CartContentsBox.scss';

const CartContentsBox = () => {
  return (
    <div className="cartContentsBox">
      <CartBox />
      <OrderBox />
    </div>
  );
};
export default CartContentsBox;
