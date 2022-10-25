import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import { BsCart2 } from 'react-icons/bs';
import './DefaultItem.scss';

const DefaultItem = ({ contents }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="itemContainer">
      <img
        className="itemImg"
        src={contents?.thumbnailImageUrl}
        alt="상품 이미지"
      />
      <div
        className="itemIconBox"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <BsCart2 className="reactIcon" />
      </div>
      <p className="itemDescription">{contents?.productName}</p>
      <p className="itemPrice">{contents?.price + `원`}</p>
      {openModal && (
        <Modal
          contents={contents}
          type="cart"
          close={() => {
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default DefaultItem;
