import React from 'react';
import './CartBox.scss';
import Chilled from './Chilled/Chilled';
import Frozen from './Frozen/Frozen';
import RoomTemperature from './RoomTemperature/RoomTemperature';
const CartBox = () => {
  return (
    <div className="cartBox">
      <Frozen />
      <Chilled />
      <RoomTemperature />
    </div>
  );
};

export default CartBox;
