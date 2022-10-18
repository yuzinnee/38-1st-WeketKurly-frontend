import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavMiddleBox = () => {
  const navigate = useNavigate();

  return (
    <div className="navMiddleBox">
      <div className="navLogoBox">
        <p className="navLogoImg">Kurly</p>
        <p
          className="navMarketText"
          onClick={() => {
            navigate(`/`);
          }}
        >
          마켓컬리
        </p>
        <p className="navBeautyText">뷰티컬리</p>
      </div>
      <div className="navSearchBox">
        <input
          className="navSearchInput"
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <FontAwesomeIcon className="navSearchIcon" icon={faHeart} />
      </div>
      <div className="navIconBox">
        <FontAwesomeIcon className="navIcon" icon={faHeart} />
        <FontAwesomeIcon className="navIcon" icon={faHeart} />
        <FontAwesomeIcon className="navIcon" icon={faHeart} />
      </div>
    </div>
  );
};

export default NavMiddleBox;
