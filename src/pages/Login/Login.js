import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import Input from '../../components/Input/Input';

function Login() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ userId: '', password: '' });

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isValid = userInfo.userId && userInfo.password;

  const submitUserInfo = e => {
    e.preventDefault();
    if (!isValid) {
      alert('아이디 또는 비밀번호를 입력해주세요, 모달창이 띄워질 영역입니다');
    } else {
      fetch('http://10.58.52.89:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(userInfo),
      })
        .then(response => {
          if (response.ok === true) {
            return response.json();
          }
          throw new Error('에러 발생, check status code');
        })
        .catch(error => alert(error))
        .then(data => {
          if (data.message === 'LOGIN_SUCCESS') {
            localStorage.setItem('token', data.token);
            navigate('/Main');
          } else alert('로그인 실패, 모달창이 띄워질 예정입니다.');
        });
    }
  };

  return (
    <div className="login">
      <div className="titleContainer">
        <div className="title">로그인</div>
      </div>
      <div className="formContainer">
        <form onSubmit={submitUserInfo}>
          <div className="input-container">
            <Input
              value={userInfo.userId}
              className="input"
              type="id"
              name="userId"
              placeholder="아이디를 입력해주세요"
              onChange={getUserInfo}
            />
            <Input
              value={userInfo.password}
              className="input"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={getUserInfo}
            />
          </div>
          <div className="find">
            <div className="findButton">아이디 찾기</div>
            <span />
            <div className="findButton">비밀번호 찾기</div>
          </div>
          <div className="buttonContainer">
            <button className="loginButton" onClick={submitUserInfo}>
              로그인
            </button>
            <Link to="/signup">
              <button className="signinButton">회원가입 </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
