import React, { useState, useRef, useEffect } from 'react';
import CartList from './CartList/CartList';
import OrderBox from './OrderBox/OrderBox';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BsSun, BsSnow } from 'react-icons/bs';
import './CartContentsBox.scss';

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

  // < get api >
  useEffect(() => {
    fetch(`http://10.58.52.133:8000/carts/getcarts`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartData(() => {
          const COPY_CART_INFO_LIST = [...CART_INFO_LIST];
          COPY_CART_INFO_LIST.map(cur => {
            result.data.map(current => {
              if (cur.id === current.pid) {
                cur.data.push(current);
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
    data: '',
  },
  {
    id: 2,
    type: '냉장식품',
    icon: <MdOutlineWaterDrop className="chilledIcon" />,
    data: '',
  },
  {
    id: 3,
    type: '상온식품',
    icon: <BsSun className="sunIcon" />,
    data: '',
  },
];

export default CartContentsBox;
