import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import ToastPopup from '../../ToastPopup/ToastPopup';
import { BsCart2 } from 'react-icons/bs';
import './DiscountItem.scss';

const DiscountItem = ({ contents }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const discountPrice =
    contents?.price - (contents?.discount / 100) * contents?.price;

  return (
    <div className="disItemContainer">
      <img
        className="disItemImg"
        src={contents?.thumbnailImageUrl}
        alt="상품 이미지"
      />
      <div
        className="disItemIconBox"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <BsCart2 className="reactIcon" />
      </div>

      <div className="disItemSpecialBox">
        <p className="disItemSpecialText">일일특가</p>
      </div>
      <p className="disItemDescription">{contents?.shortDescription}</p>
      <p className="disItemName">{contents?.productName}</p>
      <span className="discountRate">{contents?.discount + `%`}</span>
      <span className="disItemDiscountPrice">
        {discountPrice.toLocaleString() + `원`}
      </span>
      <span className="disItemPrice">{contents?.price}</span>
      {openModal && (
        <Modal
          type="cart"
          contents={contents}
          close={() => {
            setOpenModal(false);
          }}
          openToast={openToast}
          setOpenToast={setOpenToast}
        />
      )}
      {openToast && (
        <ToastPopup
          openToast={openToast}
          setOpenToast={setOpenToast}
          imgUrl={contents?.thumbnailImageUrl}
          name={contents?.productName}
        />
      )}
    </div>
  );
};

export default DiscountItem;
