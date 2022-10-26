import React, { useState } from 'react';
import CartItem from './CartItem/CartItem';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './CartList.scss';

const CartList = ({ list, setCartData, cartData }) => {
  const [openlist, setOpenlist] = useState(true);

  console.log(list);

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
      {openlist && (
        <div className="cartItemList">
          {list.data.map(list => (
            <CartItem
              list={list}
              key={list.id}
              setCartData={setCartData}
              cartData={cartData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartList;
