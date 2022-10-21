import React from 'react';
import Chilled from './Chilled/Chilled';
import Frozen from './Frozen/Frozen';
import RoomTemperature from './RoomTemperature/RoomTemperature';
import './CartBox.scss';

const CartBox = () => {
  return (
    <div className="cartBox">
      <Chilled />
      <Frozen />
      <RoomTemperature />
    </div>
  );
};

export default CartBox;
