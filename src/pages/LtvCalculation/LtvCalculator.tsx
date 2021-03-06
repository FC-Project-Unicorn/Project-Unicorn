// Ltv 계산 부분 첫 번째 페이지(파일 업로드 페이지)

import React, { useEffect } from "react";
import styled from "styled-components";
import Logo2 from "../../assets/icons/logo2.svg";
import LeftSection from "../../components/LtvCalculation/stepCommon/LeftSection";
import LtvStep1 from "../../components/LtvCalculation/step1/LtvStep1";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/loginAuthentication/AuthContext";
import useDocumentTitle from "../../utils/useDocumentTitle";

const Base = styled.div`
  width: 1440px;
  height: 100vh;
  margin: 0 auto;
  background: #fafafa;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 130px;
  display: flex;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 21px;
  padding-right: 948px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;

const LogoutBtn = styled.button`
  width: 90px;
  height: 36px;
  border-radius: 6px;
  border: 2px solid #0420bf;
  margin-top: 9px;
  margin-bottom: 10px;
  font-family: "Spoqa Han Sans", "sans-serif";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #0420bf;
  background-color: #fafafa;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
`;

const LtvCalculator = () => {
  // 타이틀 변경 로직
  useDocumentTitle("유니콘: 파일 업로드");

  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/ltvCal");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <Base>
      <Header>
        <LogoContainer>
          <img
            src={Logo2}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </LogoContainer>

        <LogoutBtn
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          로그아웃
        </LogoutBtn>
      </Header>
      <Main>
        <LeftSection />
        <LtvStep1 />
      </Main>
    </Base>
  );
};

export default LtvCalculator;
