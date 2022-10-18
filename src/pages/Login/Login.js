import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <div className="title-container">
        <div className="title">로그인</div>
      </div>
      <div className="form-container">
        <form>
          <div className="input-container">
            <input
              className="login-input "
              placeholder="아이디를 입력해주세요"
            ></input>
            <input
              className="login-input "
              placeholder="비밀번호를 입력해주세요"
            ></input>
          </div>
          <div className="find">
            <Link to="/">아이디 찾기</Link>
            <span></span>
            <Link to="/">비밀번호 찾기</Link>
          </div>
          <div className="button-container">
            <button className="login-button">로그인</button>
            <button className="signin-button">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
