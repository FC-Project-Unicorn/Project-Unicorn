import React from "react";
import styled from "styled-components";
import LogoFooter from "../../../assets/images/Logo_Footer.svg";

const Container = styled.div`
  /* border: 1px solid black; */
  width: 1440px;
  height: 120px;
  margin: 0 auto;
  position: relative;
  background-color: #F5F5F5;
`;

const Logo = styled.div`
  /* border: 1px solid black; */
  top: 50px;
  left: 130px;
  position: absolute;
`;

const MenuContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  position: absolute;
  width: 260px;
  height: 20px;
  justify-content: space-between;
  top: 50px;
  left: 340px;
`;

const Menu = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #999999;
  `;

const Info = styled.div`
  /* border: 1px solid black; */
  position: absolute;
  left: 720px;
  top: 30px;
  font-size: 14px;
  color: #999999;
  `;

const Bold = styled.div`
  font-weight: 700;
`

const Blue = styled.div`
  color: #0420BF;
`

function Footer() {
  return (
    <>
      <Container>
        <Logo>
          <img src={LogoFooter} alt="Logo Footer" />
        </Logo>
        <MenuContainer>
          <Menu>About</Menu>
          <Menu>이용약관</Menu>
          <Menu>개인정보 처리방침</Menu>
        </MenuContainer>
        <Info>
          유니콘 판별기 | (주) 1z Labs | 대표자 : 0 0 0 | 개인정보보호책임자 :OOO <br/>
          사업자 등록번호 : OO-OOO-OOOO | 건물 주소~~~~~~~~~~~~~~~~~~~<br/>
          고객상담 전화번호 OOOO-OOOO | 평일 00:00-00:00 | 점심 00:00-00:00 | 주말/공휴일 휴무
        </Info>
      </Container>
    </>
  );
}

export default Footer;
