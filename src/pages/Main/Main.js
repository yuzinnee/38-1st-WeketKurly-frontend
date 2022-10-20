import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import './Main.scss';

const Main = () => {
  const [asd, setAsd] = useState(true);

  return (
    <div>
      {asd && (
        <Modal
          close={() => {
            setAsd(false);
            console.log('>??');
          }}
          type="cart"
        />
      )}
    </div>
  );
};

export default Main;
