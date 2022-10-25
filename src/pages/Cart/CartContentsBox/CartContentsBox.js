import React, { useState, useRef, useEffect } from 'react';
import CartList from './CartList/CartList';
import OrderBox from './OrderBox/OrderBox';
import API from '../../../config';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BsSun, BsSnow } from 'react-icons/bs';
import './CartContentsBox.scss';

const CartContentsBox = () => {
  const [cartData, setCartData] = useState([]);

  const token = localStorage.getItem('token');

  let totalPrice = cartData.reduce(
    (acc, cur) => acc + +cur.price * cur.quantity,
    0
  );

  let deliveryFee = totalPrice === 0 ? 0 : totalPrice >= 30000 ? '무료' : 5000;

  let totalAndFee = totalPrice + (deliveryFee === '무료' ? 0 : deliveryFee);

  console.log(cartData);

  // < get api >
  useEffect(() => {
    fetch(API.getCarts, {
      // fetch('data/DATA.json', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartData(() => {
          const COPY_CART_INFO_LIST = [...CART_INFO_LIST];
          COPY_CART_INFO_LIST.map(contents => {
            result.data.map(list => {
              if (contents.id === list.packing_type_id) {
                contents.data.push(list);
              }
            });
          });
          return COPY_CART_INFO_LIST;
        });
      });
  }, []);

  return (
    <div className="cartContentsBox">
      <div className="cartBox">
        {cartData?.map(list => (
          <CartList list={list} key={list.id} />
        ))}
      </div>
      <OrderBox
        totalPrice={totalPrice}
        deliveryFee={deliveryFee}
        totalAndFee={totalAndFee}
      />
    </div>
  );
};

const CART_INFO_LIST = [
  {
    id: 1,
    type: '냉동식품',
    icon: <BsSnow className="frozenIcon" />,
    data: [],
  },
  {
    id: 2,
    type: '냉장식품',
    icon: <MdOutlineWaterDrop className="chilledIcon" />,
    data: [],
  },
  {
    id: 3,
    type: '상온식품',
    icon: <BsSun className="sunIcon" />,
    data: [],
  },
];

export default CartContentsBox;
