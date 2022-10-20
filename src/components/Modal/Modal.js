import React from 'react';
import CartModal from './CartModal/CartModal';
import DefaultModal from './DefaultModal/DefaultModal';
import './Modal.scss';

const MODAL_COMPONENTS_MAP = (close, contents) => ({
  cart: <CartModal close={close} contents={contents} />,
  default: <DefaultModal close={close} contents={contents} />,
});

const Modal = ({ type, contents, close }) =>
  MODAL_COMPONENTS_MAP(close, contents)[type];

export default Modal;
