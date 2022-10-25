import React from 'react';
import DefaultItem from './DefaultItem/DefaultItem';
import DiscountItem from './DiscountItem/DiscountItem';
import './Item.scss';

const Item = props => {
  const { type, contents, openModal, setOpenModal } = props;

  const item = {
    discount: (
      <DiscountItem
        contents={contents}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    ),
    default: (
      <DefaultItem
        contents={contents}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    ),
  };

  return <>{item[type]}</>;
};

export default Item;
