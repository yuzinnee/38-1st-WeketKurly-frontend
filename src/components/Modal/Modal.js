import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Modal.scss';

const Modal = props => {
  const { close, contents } = props;

  const token = localStorage.getItem('token');

  const [count, setCount] = useState(1);

  const BackHandler = e => {
    e.stopPropagation();
    close();
  };

  const postItemInfo = () => {
    if (!token) {
      alert('회원전용 서비스입니다!');
    }
  };

  if (contents.type === 'cart') {
    return (
      <div className="modalBackground">
        <div className="cartModalBox">
          <div className="cartModalTopBox">
            <p className="cartContentsItem">우삼겹 순두부찌개</p>
            <div className="cartCountBox">
              <p className="cartItemPrice">8900원</p>
              <div className="cartCount">
                {count <= 1 ? (
                  <FontAwesomeIcon
                    className="cartMinusIcon"
                    style={{ color: 'lightGray' }}
                    icon={faMinus}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="cartMinusIcon"
                    icon={faMinus}
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  />
                )}
                <p className="cartCounts">{count}</p>
                <FontAwesomeIcon
                  className="cartPlusIcon"
                  icon={faPlus}
                  onClick={() => {
                    setCount(count + 1);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="cartModalMiddleBox">
            <p className="cartSumText">합계</p>
            <p className="cartSumVar">{count * 8900 + '원'}</p>
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
            <button
              className="cartModalLeftBtn"
              onClick={e => {
                BackHandler(e);
              }}
            >
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
  } else if (contents.type === 'normal') {
    return (
      <div className="modalBackground">
        <div className="modalBox">
          <div className="modalContentsBox">
            <p className="modalContentsText">{contents.title}</p>
          </div>
          <div
            className="modalConfirmBox"
            onClick={e => {
              BackHandler(e);
            }}
          >
            <button className="modalConfirmBtn">확인</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
