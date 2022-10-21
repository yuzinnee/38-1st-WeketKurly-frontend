import React, { useState } from 'react';
import './Chilled.scss';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
const Chilled = () => {
  const [openlist, setOpenlist] = useState(true);

  return (
    <div className="chilled">
      <div className="chilledDropTab">
        <div className="chilledIconBox">
          <MdOutlineWaterDrop className="chilledIcon" />
          <p className="chilledText">냉장 식품</p>
        </div>
        {openlist === true ? (
          <IoIosArrowUp
            className="arrowIcon"
            onClick={() => {
              setOpenlist(!openlist);
            }}
          />
        ) : (
          <IoIosArrowDown
            className="arrowIcon"
            onClick={() => {
              setOpenlist(!openlist);
            }}
          />
        )}
      </div>
      {openlist && <div className="chilledItemList"></div>}
    </div>
  );
};

export default Chilled;
