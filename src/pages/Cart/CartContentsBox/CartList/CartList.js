import React, { useState } from 'react';
import CartItem from './CartItem/CartItem';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './CartList.scss';

const CartList = ({ list }) => {
  const [openlist, setOpenlist] = useState(true);

  const handleClickOpenList = () => {
    setOpenlist(openList => !openList);
  };

  return (
    <div className="cartList">
      <div className="cartListDropTab">
        <div className="cartListIconBox">
          {list.icon}
          <p className="cartListText">{list.type}</p>
        </div>
        {openlist === true ? (
          <IoIosArrowUp className="arrowIcon" onClick={handleClickOpenList} />
        ) : (
          <IoIosArrowDown className="arrowIcon" onClick={handleClickOpenList} />
        )}
      </div>
      {/* {openlist && (
        <div className="cartItemList">
          {list.data?.map((list, idx) => {
            <CartItem list={list} key={list.id} />;
          })}
        </div>
      )} */}
    </div>
  );
};

export default CartList;
