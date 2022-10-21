import React, { useEffect, useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [asd, setAsd] = useState(false);
  console.log(asd);

  const [values, setValues] = useState({
    userId: '',
    password: '',
    name: '',
    email: '',
    genderId: 1,
    birthday: '19970104',
  });
  const valueHandler = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  const { userId, password, name, email, genderId } = values;
  const [passwordCheck, setPasswordCheck] = useState('');
  const userIdRegEx = /^[a-z]+[a-z0-9]{5,16}$/g;
  const isUserIdVaild = userId.length;
  const isPasswordValid = password.length > 9;
  const isPasswordCheckValid = password === passwordCheck;
  const isNameValid = name.length > 0;
  const emailRegEx = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  const isEmailValid = emailRegEx.test(email);

  console.log(isNameValid);

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

  return (
    <>
      <div className="signupContainer">
        <div className="mainContainer">
          <div className="topSignupLetter">회원가입</div>
          <div className="topRequired">
            <span className="star">*</span>필수입력사항
          </div>

          {/* ----------------------아이디아이디아이디아이디아이디---------------------------- */}
          <div className="eachContainer">
            <span className="leftLetter">
              아이디<span className="star">*</span>
            </span>
            <div className="inputContainer">
              <input
                className="input"
                name="userId"
                type="text"
                placeholder="아이디를 입력해주세요"
                onChange={valueHandler}
              />
              {userId.length !== 0 &&
                (isEmailValid || (
                  <span className="warning">
                    6자 이상 16자 이하의 영문 혹은 숫자를 조합
                  </span>
                ))}
            </div>
            <button className="rightButton">
              <span className="buttonLetter">중복확인</span>
            </button>
          </div>
          {/* ----------------------비번비번비번비번비번비번비번---------------------------- */}
          <div className="eachContainer">
            <span className="leftLetter">
              비밀번호<span className="star">*</span>
            </span>
            <div className="inputContainer">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={valueHandler}
              />
              {password.length !== 0 &&
                (isPasswordValid || (
                  <span className="warning">최소 10자 이상 입력</span>
                ))}
            </div>
          </div>
          {/* ----------------------비번확인비번확인비번확인---------------------------- */}
          <div className="eachContainer">
            <span className="leftLetter">
              비밀번호확인<span className="star">*</span>
            </span>
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </div>
          {/* ----------------------이름이름이름이름이름---------------------------- */}
          <div className="eachContainer">
            <span className="leftLetter">
              이름<span className="star">*</span>
            </span>
            <div className="inputContainer">
              <input
                className="input"
                name="name"
                placeholder="이름을 입력해주세요"
                onChange={valueHandler}
              />
              {name.length !== 0 &&
                (isNameValid || (
                  <span className="Warning">이름을 입력해주세요.</span>
                ))}
            </div>
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
    </>
  );
};

export default Signup;
