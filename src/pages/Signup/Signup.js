import React, { useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [values, setValues] = useState({
    userId: '',
    password: '',
    passwordCheck: '',
    name: '',
    email: '',
    genderId: '',
    year: '',
    month: '',
    day: '',
  });
  const [isPasswordWarning, setIspasswordWarning] = useState(false);
  const showPasswordWarning = () => {
    setIspasswordWarning(true);
  };
  const valueHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const {
    userId,
    password,
    name,
    email,
    genderId,
    passwordCheck,
    year,
    month,
    day,
  } = values;

  const userIdRegEx = /^[a-z]+[a-z0-9]{5,16}$/g;
  const userIdValid = userIdRegEx.test(userId);
  const passwordRegEx =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  // / ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const isPasswordValid = passwordRegEx.test(password);
  const isPasswordCheck = password === passwordCheck;
  const isNameValid = name.length > 0;
  const emailRegEx = /[a-zA-Z0-9+_]+@[a-z]+\.+[a-z]/;
  const isEmailValid = emailRegEx.test(email);
  const birthday = year + month.length === 2 ? month : 0 + month + day;
  console.log(password);
  console.log(isPasswordWarning);

  const submitUseInfo = () => {
    fetch('http://10.58.52.89:3000/users/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        userId: '',
        password: '',
        passwordCheck: '',
        name: '',
        email: '',
        genderId: genderId,
        birthday: year + month + day,
      }),
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

  // function IdInput() {}

  return (
    <>
      <div className="signupContainer">
        <div className="mainContainer">
          <div className="topSignupLetter">회원가입</div>
          <div className="topRequired">
            <span className="star">*</span>필수입력사항
          </div>

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
                (userIdValid || (
                  <span className="warning">
                    6자 이상 16자 이하의 영문 혹은 숫자를 조합
                  </span>
                ))}
            </div>
            <button className="rightButton">
              <span className="buttonLetter">중복확인</span>
            </button>
          </div>

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
                onFocus={showPasswordWarning}
              />

              {isPasswordWarning &&
                (password.length < 10 ? (
                  <span className="warning">최소 10자 이상 입력</span>
                ) : (
                  isPasswordValid || (
                    <span className="warning">
                      영문 /숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                    </span>
                  )
                ))}
            </div>
          </div>

          <div className="eachContainer">
            <span className="leftLetter">
              비밀번호확인<span className="star">*</span>
            </span>
            <div className="inputContainer">
              <input
                type="password"
                name="passwordCheck"
                className="input"
                placeholder="비밀번호를 한번 더 입력해주세요"
                onChange={valueHandler}
              />
              {passwordCheck.length !== 0 &&
                (isPasswordCheck || (
                  <span className="warning">동일한 비밀번호를 입력</span>
                ))}
            </div>
          </div>

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

          <div className="eachContainer">
            <span className="leftLetter">
              이메일<span className="star">*</span>
            </span>
            <div className="inputContainer">
              <input
                className="input"
                name="email"
                value={email}
                placeholder="예: weketkurly@kurly.com"
                onChange={valueHandler}
              />
              {email.length !== 0 &&
                (isEmailValid || (
                  <span className="warning">
                    이메일 형식으로 입력해 주세요.
                  </span>
                ))}
            </div>
            <button className="rightButton">
              <span className="buttonLetter">중복확인</span>
            </button>
          </div>

          <div className="eachContainer">
            <span className="leftLetter">성별</span>
            <div className="choiceContainer">
              <div className="male">
                <input
                  name="genderId"
                  type="radio"
                  className="genderChoiceButton"
                  value="1"
                  checked={genderId === '1'}
                  onChange={valueHandler}
                ></input>
                <div className="maleLetter">남자</div>
              </div>
              <div className="female">
                <input
                  type="radio"
                  name="genderId"
                  className="genderChoiceButton"
                  checked={genderId === '2'}
                  value="2"
                  onChange={valueHandler}
                ></input>
                <div className="femaleLetter">여자</div>
              </div>
            </div>
          </div>

          <div className="eachContainer">
            <span className="leftLetter">생년월일</span>
            <div className="birthContainer">
              <input
                name="year"
                type="text"
                className="birthInput"
                // min="1900"
                // max="2022"
                maxLength="4"
                placeholder="YYYY"
              ></input>
              <span className="birthSlash">/</span>
              <input
                name="month"
                className="birthInput"
                maxLength="2"
                placeholder="MM"
                type="text"
              ></input>
              <span className="birthSlash">/</span>
              <input
                name="day"
                className="birthInput"
                maxLength="2"
                placeholder="DD"
              ></input>
            </div>
          </div>

          <div className="eachContainer">
            <span className="leftLetter">추가입력 사항</span>
            <div className="choiceContainer">
              <div className="recommendContainer">
                <input
                  name="additionalIfo"
                  type="radio"
                  className="genderChoiceButton"
                ></input>
                <span>추천인 아이디</span>
              </div>
              <div className="recommendContainer">
                <input
                  type="radio"
                  name="additionalIfo"
                  className="genderChoiceButton"
                ></input>
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
