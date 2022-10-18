import React, { useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [values, setValues] = useState({
    id: '',
    password: '',
  });

  return (
    <>
      <div className="signupContainer">
        <div className="topSignupLetter">회원가입</div>
        <div className="mainContainer">
          <div className="topRequired">
            <span className="star">*</span>필수입력사항
          </div>
          <div className="mainContainer">
            <div className="eachContainer">
              <span className="leftLetter">
                아이디<span className="star">*</span>
              </span>
              <input
                className="input"
                value={values.id}
                placeholder="아이디를 입력해주세요"
              />
              <button className="rightButton">
                <span className="buttonLetter">중복확인</span>
              </button>
            </div>
            <div className="eachContainer">
              <span className="leftLetter">
                비밀번호<span className="star">*</span>
              </span>
              <input className="input" placeholder="비밀번호를 입력해주세요" />
            </div>
            <div className="eachContainer">
              <span className="leftLetter">
                비밀번호확인<span className="star">*</span>
              </span>
              <input
                className="input"
                placeholder="비밀번호를 한번 더 입력해주세요"
              />
            </div>
            <div className="eachContainer">
              <span className="leftLetter">
                이름<span className="star">*</span>
              </span>
              <input className="input" placeholder="이름을 입력해주세요" />
            </div>
            <div className="eachContainer">
              <span className="leftLetter">
                이메일<span className="star">*</span>
              </span>
              <input className="input" placeholder="예: weketkurly@kurly.com" />
              <button className="rightButton">
                <span className="buttonLetter">중복확인</span>
              </button>
            </div>

            <div className="eachContainer">
              <span className="leftLetter">성별</span>
              <div className="choiceContainer">
                <div className="male">
                  <div className="genderChoiceButton"></div>
                  <div className="maleLetter">남자</div>
                </div>
                <div className="female">
                  <div className="genderChoiceButton"></div>
                  <div className="femaleLetter">여자</div>
                </div>
                <div className="genderNone">
                  <div className="genderChoiceButton"></div>
                  <div className="genderNoneLetter">선택안함</div>
                </div>
              </div>
            </div>
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
            <div className="eachContainer">
              <span className="leftLetter">추가입력 사항</span>
              <div className="choiceContainer">
                <div className="recommendContainer">
                  <div className="genderChoiceButton"></div>
                  <span>추천인 아이디</span>
                </div>
                <div className="recommendContainer">
                  <div className="genderChoiceButton"></div>
                  <span>참여 이벤트명</span>
                </div>
              </div>
            </div>
            <div className="underline"></div>
            <div className="signupButtonContainer">
              <button className="signupButton">
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
