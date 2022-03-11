import React, { useState } from "react";
import { auth } from "../../firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "@firebase/auth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainButton from "../../components/Login/loginCommon/MainButton";
import UnicornIcon from "../../components/Login/loginCommon/UnicornIcon";
import UserInputContainer from "../../components/Login/loginCommon/UserInputContainer";
import loginNaver from "../../assets/icons/Login_Naver.svg";
import loginKakao from "../../assets/icons/Login_Kakao.svg";
import loginGoogle_logo from "../../assets/icons/loginGoogle_logo.svg";
import loginGoogle_letter from "../../assets/icons/loginGoogle_letter.svg";
import loginPageImage from "../../assets/images/loginImage.svg";
import RightImagePart from "../../components/Login/loginCommon/RightImagePart";

// 로그인 페이지 전체 컨테이너
const LoginPageContainer = styled.div`
  width: 1440px;
  height: 820px;
  display: flex;
  background-color: slateblue;
`;

// 로그인 페이지 왼쪽 유저 입력부분 컨테이너
const LoginUserInputPart = styled.div`
  width: 630px;
  background: #ffffff;
  padding-top: 99px;
  padding-left: 130px;
  padding-right: 100px;
  padding-bottom: 97px;
  padding
  display: flex;
  flex-direction: column;
`;

// // 로그인 페이지 상단 소개문구 담는 컨테이너
// const LoginGreetingCotainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   left: 130px;
//   top: 186px;
//   margin-top: 69px;
// `;

//소개문구 윗부분
const GreetingTop = styled.span`
  display: block;
  margin-top: 69px;
  width: 81%;
  font-size: 30px;
  font-weight: 700;
  color: #0420bf;
  line-height: 35px;
  // letter-spacing: px;
  // word-spacing: -1px;
  white-space: nowrap;
`;

//소개문구 아랫부분
const GreetingBottom = styled.span`
  display: block;
  margin-top: 4px;
  margin-bottom: 32px;
  width: 100%;
  height: 27px;
  font-size: 18px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.6);
  // letter-spacing: -1px;
  // word-spacing: -2px;
  padding-top: 4px;
`;

// 로그인 유지 & 비밀번호 찾기
const KeepLoggedIn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  margin-bottom: 22px;
  height: 24px;
  padding-top: 3px;

  label {
    font-size: 16px;
    color: #999999;
  }

  a {
    font-size: 16px;
    color: #999999;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// 로그인 가운데 분리선
const DividingPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

// 분리하는 선
const DividingLine = styled.hr`
  box-sizing: content-box;
  width: 34.5%;
  border: 0.5px solid white;
  height: 1px;
  background: rgba(192, 192, 192, 0.5);
`;

// 분리선 가운데 문구
const SnsLogin = styled.span`
  width: 26.75%;
  height: 14px;
  color: #c0c0c0;
  font-size: 12px;
  letter-spacing: -0.7px;
  margin-left: 6px;
`;

// SNS 로그인 부분
const SnsContainer = styled.div`
  width: 100%
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 59px;
`;

// SNS 로그인 버튼

const SNSLoginButton = styled.div`
  width: 27.5%;
  height: 40px;
  &:hover {
    cursor: pointer;
  }

  &:nth-of-type(3) {
    background: #ffffff;
    /* googleshadow1 */

    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.084),
      0px 1px 1px rgba(0, 0, 0, 0.168);
    border-radius: 2px;
    padding-left: 3px;
    padding-right: 8px;
    display: flex;
    justify-content: space-between;

    .g_letter {
      width: 45px;
      height: 16px;
      margin-top: 12px;
    }
  }
`;

// 처음이면 회원가입 안내문구 컨테이너

const AskJoin = styled.div`
  width: 100%;
  display: flex;
  font-size: 15px;
  color: #999999;

  a {
    color: #f3694c;
    margin-left: 5px;
  }
`;

// 로그인 페이지 오른쪽 이미지 부분 컨테이너
// -> 따로 컴포넌트화 했음
// const LoginPageImagePart = styled.div`
//   width: 810px;
//   height: 820px;
// `;

const LoginPage = () => {
  // 로그인 로직 구현
  // 로그인 유저 입력 받을 state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  // user 인증 시, user를 currentuser로 설정
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginEmail(e.target.value);
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginPassword(e.target.value);
  };

  // 로그인 담당 함수
  // error 타입 정의
  interface ReturnError {
    code: string;
    message: string;
  }
  //함수
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      const err = error as ReturnError;
      console.log(err.message);
    }
  };

  return (
    <LoginPageContainer>
      <LoginUserInputPart>
        <UnicornIcon />
        {/* <LoginGreetingCotainer> */}
        <GreetingTop>
          데이터를 기반으로 한<br />
          프로젝트 지속 가능성 확인
        </GreetingTop>
        <GreetingBottom>
          안녕하세요! 로그인을 위해 계정 정보를 입력해주세요.
        </GreetingBottom>
        {/* </LoginGreetingCotainer> */}
        <UserInputContainer
          inputType="이메일"
          type={"email"}
          onChange={emailHandler}
        />
        <UserInputContainer
          inputType="비밀번호"
          type={"password"}
          onChange={passwordHandler}
        />
        <KeepLoggedIn>
          <label>
            <input type="checkbox" />
            로그인 유지
          </label>
          <Link to="/findpw">비밀번호 찾기</Link>
        </KeepLoggedIn>
        <MainButton buttonType="로그인" onClick={login} />
        <DividingPart>
          <DividingLine />
          <SnsLogin>SNS 계정으로 로그인</SnsLogin>
          <DividingLine />
        </DividingPart>
        <SnsContainer>
          <SNSLoginButton>
            <img src={loginNaver} alt="naver" />
          </SNSLoginButton>
          <SNSLoginButton>
            <img src={loginKakao} alt="kakao" />
          </SNSLoginButton>
          <SNSLoginButton>
            <img src={loginGoogle_logo} alt="g_logo" />
            <img src={loginGoogle_letter} alt="g_letter" className="g_letter" />
          </SNSLoginButton>
        </SnsContainer>
        <AskJoin>
          <span>유니콘이 처음이신가요?</span>
          <Link to="/join">회원가입</Link>
        </AskJoin>
      </LoginUserInputPart>
      <RightImagePart imageSrc="loginPageImage" />
    </LoginPageContainer>
  );
};

export default LoginPage;