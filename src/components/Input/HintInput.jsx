import React from 'react';
import Input from './Input';

const HintInput = props => {
  const { message, ...others } = props;
  return (
    <div>
      <Input {...others} />
      <p>{message}</p>
    </div>
  );
};

export default HintInput;
