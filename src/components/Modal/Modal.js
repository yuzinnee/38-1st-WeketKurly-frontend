import React from 'react';
import CartModal from './CartModal/CartModal';
import DefaultModal from './DefaultModal/DefaultModal';
import './Modal.scss';
const Modal = ({ type, contents, close, data, openToast, setOpenToast }) => {
  const modal = {
    cart: (
      <CartModal
        close={close}
        contents={contents}
        openToast={openToast}
        setOpenToast={setOpenToast}
      />
    ),
    default: <DefaultModal close={close} contents={contents} data={data} />,
  };

  return <>{modal[type]}</>;
};

export default Modal;
