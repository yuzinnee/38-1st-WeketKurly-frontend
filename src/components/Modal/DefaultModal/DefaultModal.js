import React from 'react';
import API from '../../../config';
import './DefaultModal.scss';

const DefaultModal = ({ close, contents, data }) => {
  const token = localStorage.getItem('token');

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  const deleteItem = cartId => {
    fetch(`${API.deleteCarts}/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => {
        if (response.ok === true) {
          fetch(API.getCarts, {
            method: 'GET',
            headers: {
              Authorization: token,
            },
          }).then(res => res.json(), console.log('성공'));
        }
        throw new Error('에러 발생, check status code');
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
                deleteItem(data.cartId);
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
