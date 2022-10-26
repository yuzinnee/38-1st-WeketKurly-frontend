import React from 'react';
import API from '../../../config';
import './DefaultModal.scss';

const DefaultModal = ({ close, contents, cartData, setCartData, cartId }) => {
  const token = localStorage.getItem('token');

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  const deleteItem = () => {
    fetch(`${API.deleteCarts}/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => {
        res.status === 200
          ? setCartData(cartData.filter(data => data.cartId !== cartId))
          : alert('실패');
      })
      .catch(error => alert(error));
  };

  return (
    <div className="modalBackground" onClick={closeHandler}>
      <div
        className="modalBox"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="modalContentsBox">
          <p className="modalContentsText">{contents?.title}</p>
        </div>
        {contents?.type === 'delete' ? (
          <div className="modalConfirmBox">
            <button className="modalDeleteBtn" onClick={closeHandler}>
              취소
            </button>
            <button
              className="modalConfirmBtn"
              onClick={() => {
                deleteItem();
              }}
            >
              확인
            </button>
          </div>
        ) : (
          <div className="modalConfirmBox" onClick={closeHandler}>
            <button className="modalConfirmBtn">확인</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultModal;
