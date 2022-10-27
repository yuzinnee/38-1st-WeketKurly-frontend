import React, { useState } from 'react';
import './Signup.scss';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';

const RULES = {
  id: {
    pattern: value => /^[a-z]+[a-z0-9]{5,16}$/g.test(value),
    message: '아이디를 확인해주세요',
  },
  password: {
    pattern: value => /^[a-z]+[a-z0-9]{5,16}$/g.test(value),
    message: '패스워드를 확인해주세요',
  },
};

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
  // 6자 이상 16자 이하의 영문 소문자 혹은 숫자 조합
  const userIdValid = userIdRegEx.test(userId);
  const passwordRegEx =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{9,})/;
  //a-z와 A-Z/숫자/특수 문자(공백 제외) 허용, 2개이상 조합, 최소 10자 이상

  const isPasswordValid = passwordRegEx.test(password);
  const isPasswordCheck = password === passwordCheck;
  const isNameValid = name.length > 0;
  const emailRegEx = /[a-zA-Z0-9+_]+@[a-z]+\.+[a-z]/;
  const isEmailValid = emailRegEx.test(email);
  const isSubmitValid =
    userIdValid && password && passwordCheck && name && email;
  const [modalInfo, setModalInfo] = useState({
    isModalOpen: false,
    infoIndex: 0,
  });
  const { isModalOpen, infoIndex } = modalInfo;
  const handleModal = (valid, index) => {
    setModalInfo({ isModalOpen: valid, infoIndex: index });
  };
  const birthday = year + month.padStart(2, 0) + day.padStart(2, 0);
  const UserIdDuplicationCheck = () => {
    let index;
    userIdValid ? (index = 1) : (index = 0);
    handleModal(true, index);
  };
  const emailDuplicationCheck = () => {
    let index;
    isEmailValid ? (index = 3) : (index = 2);
    handleModal(true, index);
  };
  const signupSubmit = e => {
    let index;
    isSubmitValid ? (index = 5) : (index = 4);
    handleModal(true, index);
    submitUseInfo(e);
  };
  const submitUseInfo = e => {
    e.preventDefault();
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

  return (
    <>
      <div className="signupContainer">
        <div className="mainContainer">
          <div className="SignupTitleLetter">회원가입</div>
          <div className="requiredSymbolDescription">
            <span className="requiredSymbol">*</span>필수입력사항
          </div>

          <div className="eachContainer">
            <span className="containerTitle">
              아이디<span className="requiredSymbol">*</span>
            </span>
            <div className="inputContainer">
              <Input
                className="signupInputBox"
                name="userId"
                type="text"
                placeholder="아이디를 입력해주세요"
                onChange={valueHandler}
              />
              {userId.length !== 0 &&
                (userIdValid || (
                  <span className="warningText">
                    6자 이상 16자 이하의 영문 혹은 숫자를 조합
                  </span>
                ))}
            </div>
            <button
              className="duplicationCheckButton"
              onClick={UserIdDuplicationCheck}
            >
              <span className="duplicationCheckButtonText">중복확인</span>
            </button>
            {isModalOpen && (
              <Modal
                type="default"
                contents={contents[infoIndex]}
                close={() =>
                  setModalInfo(prev => ({ ...prev, isModalOpen: false }))
                }
              />
            )}
          </div>

          <div className="eachContainer">
            <span className="containerTitle">
              비밀번호<span className="requiredSymbol">*</span>
            </span>
            <div className="inputContainer">
              <Input
                className="signupInputBox"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={valueHandler}
                onFocus={showPasswordWarning}
              />

              {isPasswordWarning &&
                (password.length < 10 ? (
                  <span className="warningText">최소 10자 이상 입력</span>
                ) : (
                  isPasswordValid || (
                    <span className="warningText">
                      영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                    </span>
                  )
                ))}
            </div>
          </div>

          <div className="eachContainer">
            <span className="containerTitle">
              비밀번호확인<span className="requiredSymbol">*</span>
            </span>
            <div className="inputContainer">
              <Input
                type="password"
                name="passwordCheck"
                className="signupInputBox"
                placeholder="비밀번호를 한번 더 입력해주세요"
                onChange={valueHandler}
              />
              {passwordCheck.length !== 0 &&
                (isPasswordCheck || (
                  <span className="warningText">동일한 비밀번호를 입력</span>
                ))}
            </div>
          </div>

          <div className="eachContainer">
            <span className="containerTitle">
              이름<span className="requiredSymbol">*</span>
            </span>
            <div className="inputContainer">
              <Input
                className="signupInputBox"
                name="name"
                placeholder="이름을 입력해주세요"
                onChange={valueHandler}
              />
              {name.length !== 0 &&
                (isNameValid || (
                  <span className="warningText">이름을 입력해주세요.</span>
                ))}
            </div>
          </div>

          <div className="eachContainer">
            <span className="containerTitle">
              이메일<span className="requiredSymbol">*</span>
            </span>
            <div className="inputContainer">
              <Input
                className="signupInputBox"
                name="email"
                value={email}
                placeholder="예: weketkurly@weket.com"
                onChange={valueHandler}
              />
              {email.length !== 0 &&
                (isEmailValid || (
                  <span className="warningText">
                    이메일 형식으로 입력해 주세요.
                  </span>
                ))}
            </div>
            <button
              className="duplicationCheckButton"
              onClick={emailDuplicationCheck}
            >
              <span className="duplicationCheckButtonText">중복확인</span>
            </button>
          </div>

          <div className="eachContainer">
            <span className="containerTitle">성별</span>
            <div className="choiceContainer">
              <div className="male">
                <Input
                  name="genderId"
                  type="radio"
                  className="genderChoiceButton"
                  value="1"
                  checked={genderId === '1'}
                  onChange={valueHandler}
                />
                <div className="maleLetter">남자</div>
              </div>
              <div className="female">
                <Input
                  type="radio"
                  name="genderId"
                  className="genderChoiceButton"
                  checked={genderId === '2'}
                  value="2"
                  onChange={valueHandler}
                />
                <div className="femaleLetter">여자</div>
              </div>
            </div>
          </div>

          <div className="eachContainer">
            <span className="containerTitle">생년월일</span>
            <div className="birthInputContainer">
              <Input
                name="year"
                type="text"
                className="birthInput"
                maxLength="4"
                placeholder="YYYY"
                onChange={valueHandler}
              />
              <span className="birthInputSeparatorSlash">/</span>
              <Input
                name="month"
                className="birthInput"
                maxLength="2"
                placeholder="MM"
                type="text"
                onChange={valueHandler}
              />
              <span className="birthInputSeparatorSlash">/</span>
              <Input
                name="day"
                className="birthInput"
                maxLength="2"
                placeholder="DD"
                onChange={valueHandler}
              />
            </div>
          </div>

          <div className="eachContainer">
            <span className="containerTitle">추가입력 사항</span>
            <div className="choiceContainer">
              <div className="recommendContainer">
                <Input
                  name="additionalIfo"
                  type="radio"
                  className="genderChoiceButton"
                />
                <span>추천인 아이디</span>
              </div>
              <div className="recommendContainer">
                <Input
                  type="radio"
                  name="additionalIfo"
                  className="genderChoiceButton"
                />
                <span>참여 이벤트명</span>
              </div>
            </div>
          </div>
          <div className="bottomSeparatorBar"></div>
          <div className="signupSubmitButtonContainer">
            <button className="signupSubmitButton" onClick={signupSubmit}>
              <span className="signupSubmitButtonText">가입하기</span>
            </button>
            {isModalOpen && (
              <Modal
                type="default"
                contents={contents[infoIndex]}
                close={() =>
                  setModalInfo(prev => ({ ...prev, isModalOpen: false }))
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

const contents = [
  {
    id: 0,
    title: '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합',
  },
  {
    id: 1,
    title: '사용할 수 있는 아이디입니다.',
  },
  {
    id: 2,
    title: '이메일을 입력해 주세요.',
  },
  {
    id: 3,
    title: '사용 가능한 이메일 입니다.',
  },
  {
    id: 4,
    title: '정보를 확인해주세요.',
  },
  {
    id: 5,
    title: '정보를 확인해주세요.',
  },
  {
    id: 6,
    title: '정보를 확인해주세요.',
  },
  {
    id: 7,
    title: '정보를 확인해주세요.',
  },
  {
    id: 8,
    title: '회원가입을 축하드립니다! 당신의 일상에 위켓을 더해보세요.',
  },
];
