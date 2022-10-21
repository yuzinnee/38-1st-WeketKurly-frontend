import React from 'react';
import './DefaultModal.scss';

const DefaultModal = props => {
  const { close, contents } = props;

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  return (
    <div className="modalBackground">
      <div className="modalBox">
        <div className="modalContentsBox">
          <p className="modalContentsText">{contents?.title}</p>
        </div>
        <div className="modalConfirmBox" onClick={closeHandler}>
          <button className="modalConfirmBtn">확인</button>
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
