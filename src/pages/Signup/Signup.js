import React, { useEffect, useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [values, setValues] = useState({
    userId: '',
    password: '',
    name: '',
    email: '',
    genderId: 1,
    birthday: '19970104',
  });
  const valueHandler = e => {
    // const { name, value } = e.target;
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  const [pwCheckInput, setpwCheckInput] = useState('');

  const submitUseInfo = () => {
    fetch('http://10.58.52.89:3000/users/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(values),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`회원가입 ${res.status} 에러가 발생했습니다`);
        }
        return res.json();
      })
      .then(result =>
        result.message === 'SIGNUP_SUCCESS'
          ? alert('회원가입 성공')
          : alert('회원가입 실패')
      )
      .catch(error => {
        console.log(error.mesasge);
        alert('회원가입 실패');
      });
  };

  function pwCheckInputOnchangeFunction(e) {
    setpwCheckInput(e.target.value);
  }
  console.log(pwCheckInput);
  return (
    <>
      <div className="signupContainer">
        <div className="topSignupLetter">회원가입</div>
        <div className="mainContainer">
          <div className="topRequired">
            <span className="star">*</span>필수입력사항
          </div>
          <div className="mainContainer">
            {/* ----------------------아이디아이디아이디아이디아이디---------------------------- */}
            <div className="eachContainer">
              <span className="leftLetter">
                아이디<span className="star">*</span>
              </span>
              <input
                className="input"
                name="userId"
                type="text"
                // value={values.userId}
                placeholder="아이디를 입력해주세요"
                onChange={valueHandler}
              />
              <button className="rightButton">
                <span className="buttonLetter">중복확인</span>
              </button>
            </div>
            {/* ----------------------비번비번비번비번비번비번비번---------------------------- */}
            <div className="eachContainer">
              <span className="leftLetter">
                비밀번호<span className="star">*</span>
              </span>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                placeholder="비밀번호를 입력해주세요"
                onChange={valueHandler}
              />
            </div>
            {/* ----------------------비번확인비번확인비번확인---------------------------- */}
            <div className="eachContainer">
              <span className="leftLetter">
                비밀번호확인<span className="star">*</span>
              </span>
              <input
                type="password"
                onChange={e => {
                  pwCheckInputOnchangeFunction(e);
                }}
                className="input"
                placeholder="비밀번호를 한번 더 입력해주세요"
              />
            </div>
            {/* ----------------------이름이름이름이름이름---------------------------- */}
            <div className="eachContainer">
              <span className="leftLetter">
                이름<span className="star">*</span>
              </span>
              <input
                className="input"
                name="name"
                value={values.name}
                placeholder="이름을 입력해주세요"
                onChange={valueHandler}
              />
            </div>
            {/* ----------------------이멜이멜이멜이멜이멜이멜---------------------------- */}
            <div className="eachContainer">
              <span className="leftLetter">
                이메일<span className="star">*</span>
              </span>
              <input
                className="input"
                name="email"
                value={values.email}
                placeholder="예: weketkurly@kurly.com"
                onChange={valueHandler}
              />
              <button className="rightButton">
                <span className="buttonLetter">중복확인</span>
              </button>
            </div>
            {/* ----------------------성별성별성별성별---------------------------- */}
            <div className="eachContainer">
              <span className="leftLetter">성별</span>
              <div className="choiceContainer">
                <div className="male">
                  <input
                    name="genderInput"
                    type="radio"
                    className="genderChoiceButton"
                  ></input>
                  <div name className="maleLetter">
                    남자
                  </div>
                </div>
                <div className="female">
                  <input
                    type="radio"
                    name="genderInput"
                    className="genderChoiceButton"
                  ></input>
                  <div className="femaleLetter">여자</div>
                </div>
              </div>
            </div>
            {/* ----------------------생년월일생년월일생년월일---------------------------- */}
            <div className="eachContainer">
              <span className="leftLetter">생년월일</span>
              <div className="birthContainer">
                <input className="birthInput" placeholder="YYYY"></input>
                <span className="birthSlash">/</span>
                <input className="birthInput" placeholder="MM"></input>
                <span className="birthSlash">/</span>
                <input className="birthInput" placeholder="DD"></input>
              </div>
            </div>
            {/* ----------------------추가입력추가입력추가입력---------------------------- */}
            <div className="eachContainer">
              <span className="leftLetter">추가입력 사항</span>
              <div className="choiceContainer">
                <div className="recommendContainer">
                  <input type="radio" className="genderChoiceButton"></input>
                  <span>추천인 아이디</span>
                </div>
                <div className="recommendContainer">
                  <input type="radio" className="genderChoiceButton"></input>
                  <span>참여 이벤트명</span>
                </div>
              </div>
            </div>
            <div className="underline"></div>
            <div className="signupButtonContainer">
              <button
                className="signupButton"
                onClick={() => {
                  submitUseInfo();
                }}
              >
                <span className="signupButtonLetter">가입하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Input({ onChange, value, placeholder, className, type }) {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
      type={type}
    />
  );
}
export default Signup;
