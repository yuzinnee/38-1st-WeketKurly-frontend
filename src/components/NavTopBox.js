import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavTopBox = () => {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="navTopBox">
      <p
        className="navSignupText"
        onClick={() => {
          navigate(`/signup`);
        }}
      >
        회원가입
      </p>
      <p
        className="navLoginText"
        onClick={() => {
          navigate(`/login`);
        }}
      >
        로그인
      </p>
      <p
        // onMouseEnter={() => {
        //   setIsHover(true);
        // }}
        // onMouseOut={() => {
        //   setIsHover(false);
        // }}
        className="navCscenterText"
      >
        고객센터
      </p>
      {/* {isHover && (
        <ul className="navCscenterBox" style={isHover}>
          <li>공지사항</li>
          <li>자주하는 질문</li>
          <li>1:1 문의</li>
          <li>대량주문 문의</li>
        </ul>
      )} */}
    </div>
  );
};

export default NavTopBox;
