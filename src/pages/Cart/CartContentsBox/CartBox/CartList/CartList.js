import React, { useState } from 'react';
import './CartList.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const CartList = ({ list }) => {
  const [openlist, setOpenlist] = useState(true);

  return (
    <div className="cartList">
      <div className="cartListDropTab">
        <div className="cartListIconBox">
          {list.icon}
          <p className="cartListText">{list.type}</p>
        </div>
        {openlist === true ? (
          <IoIosArrowUp
            className="arrowIcon"
            onClick={() => {
              setOpenlist(!openlist);
            }}
          />
        ) : (
          <IoIosArrowDown
            className="arrowIcon"
            onClick={() => {
              setOpenlist(!openlist);
            }}
          />
        )}
      </div>
      {openlist && <div className="cartListItemBox"></div>}
    </div>
  );
};

export default CartList;
