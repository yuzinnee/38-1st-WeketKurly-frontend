import React from 'react';
import './ShareToolTip.scss';

const ShareToolTip = () => {
  return (
    <div className="toolTipContainer">
      <div className="toolTipLogos">1</div>
      <div className="toolTipURLs">
        <input
          className="toolTipURL"
          type="text"
          value="http://urls"
          disabled
        />
      </div>
    </div>
  );
};

export default ShareToolTip;
