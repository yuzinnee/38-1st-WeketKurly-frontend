import React, { useState, useRef, useEffect } from 'react';
import OrderBox from './OrderBox/OrderBox';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BsSun, BsSnow } from 'react-icons/bs';
import './CartContentsBox.scss';
import CartList from './CartList/CartList';

const CartContentsBox = () => {
  const timerRef = useRef(0);

  const [cartData, setCartData] = useState([]);

  const token = localStorage.getItem('token');

  let totalPrice = cartData.reduce(
    (acc, cur) => acc + +cur.price * cur.quantity,
    0
  );

  let deliveryFee = totalPrice === 0 ? 0 : totalPrice >= 30000 ? '무료' : 5000;

  let totalAndFee = totalPrice + (deliveryFee === '무료' ? 0 : deliveryFee);

  // // < get api >
  // useEffect(() => {
  //   fetch(`http://10.58.4.136:8000/carts/getcarts/${userId}`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       setCartData(result.carts);
  //     });
  // }, []);

  return (
    <div className="cartContentsBox">
      <div className="cartBox">
        {CART_INFO_LIST.map(list => (
          <CartList list={list} key={list.id} />
        ))}
      </div>
      <OrderBox />
    </div>
  );
};

const CART_INFO_LIST = [
  {
    id: 0,
    type: '냉동식품',
    icon: <BsSnow className="frozenIcon" />,
    data: '',
  },
  {
    id: 1,
    type: '냉장식품',
    icon: <MdOutlineWaterDrop className="chilledIcon" />,
    data: '',
  },
  {
    id: 2,
    type: '상온식품',
    icon: <BsSun className="sunIcon" />,
    data: '',
  },
];

export default CartContentsBox;
