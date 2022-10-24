import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import './CartModal.scss';

const CartModal = props => {
  const { close, event, contents } = props;

  const token = localStorage.getItem('token');

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count => count + 1);
  };
  const decreaseCount = () => {
    setCount(count => count - 1);
  };

  const confirmHandler = e => {
    e.stopPropagation();
    event();
  };

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  const postItemInfo = () => {
    if (!token) {
      alert('회원전용 서비스입니다!');
    }
  };

  return (
    <div className="modalBackground">
      <div className="cartModalBox">
        <div className="cartModalTopBox">
          <p className="cartContentsItem">{contents?.productName}</p>
          <div className="cartCountBox">
            <p className="cartItemPrice">{contents?.price + '원'}</p>
            <div className="cartCount">
              {count <= 1 ? (
                <AiOutlineMinus
                  className="cartMinusIcon"
                  style={{ color: 'lightGray' }}
                />
              ) : (
                <AiOutlineMinus
                  className="cartMinusIcon"
                  onClick={decreaseCount}
                />
              )}
              <p className="cartCounts">{count}</p>
              <AiOutlinePlus className="cartPlusIcon" onClick={increaseCount} />
            </div>
          </div>
        </div>
        <div className="cartModalMiddleBox">
          <p className="cartSumText">합계</p>
          <p className="cartSumVar">{count * contents?.price + '원'}</p>
        </div>
        {token ? (
          <p className="cartPointBox">
            <span className="cartPointTag">적립</span>구매시 0원 적립
          </p>
        ) : (
          <p className="cartPointBox">
            <span className="cartPointTag">적립</span>로그인 후, 회원할인가와
            적립혜택 제공
          </p>
        )}
        <div className="cartModalBottomBox">
          <button className="cartModalLeftBtn" onClick={closeHandler}>
            취소
          </button>
          <button
            className="cartModalRightBtn"
            onClick={() => {
              postItemInfo();
            }}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
