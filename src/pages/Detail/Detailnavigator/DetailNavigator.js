import React from 'react';
import { useState } from 'react';
import './DetailNavigator.scss';

const DetailNavigator = () => {
  const [isButtonClicked, setIsButtonClicked] = useState('상품설명');
  const buttons = ['상품설명', '후기'];

  return (
    <nav className="detailNavigator">
      <nav className="navigatorContainer">
        {buttons.map((button, index) =>
          isButtonClicked === button ? (
            <div
              onClick={() => {
                setIsButtonClicked(button);
              }}
              className="navigatorButton clicked"
              key={index}
            >
              <span>{button}</span>
            </div>
          ) : (
            <div
              onClick={() => {
                setIsButtonClicked(button);
              }}
              className="navigatorButton"
              key={index}
            >
              <span>{button}</span>
            </div>
          )
        )}
        <div></div>
      </nav>
    </nav>
  );
};

export default DetailNavigator;
