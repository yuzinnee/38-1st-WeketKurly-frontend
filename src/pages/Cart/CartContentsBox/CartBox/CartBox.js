import React from 'react';
import CartList from './CartList/CartList';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { BsSnow } from 'react-icons/bs';
import './CartBox.scss';

const CartBox = () => {
  return (
    <div className="cartBox">
      {CART_INFO_LIST.map(list => (
        <CartList list={list} key={list.id} />
      ))}
    </div>
  );
};

const CART_INFO_LIST = [
  {
    id: 0,
    type: '냉동식품',
    icon: <BsSnow className="frozenIcon" />,
  },
  {
    id: 1,
    type: '냉장식품',
    icon: <MdOutlineWaterDrop className="chilledIcon" />,
  },
  {
    id: 2,
    type: '상온식품',
    icon: <BsSun className="sunIcon" />,
  },
];

export default CartBox;
