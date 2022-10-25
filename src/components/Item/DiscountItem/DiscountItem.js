import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import { BsCart2 } from 'react-icons/bs';
import './DiscountItem.scss';

const DiscountItem = ({ contents }) => {
  const [openModal, setOpenModal] = useState(false);

  const discountPrice =
    contents?.productPrice -
    (contents?.discount / 100) * contents?.productPrice;

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
      <span className="disItemDiscountPrice">{discountPrice + `원`}</span>
      <span className="disItemPrice">{contents?.productPrice}</span>
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

export default DiscountItem;
