import React from "react";
import styled from "styled-components";
import ImgScrollLine from "../../../../assets/images/Img-Scroll-Line.svg";
import ImgScroll_1 from "../../../../assets/images/Img-Scroll-1.svg";
import ImgScroll_2 from "../../../../assets/images/Img-Scroll-2.svg";
import ImgScroll_3 from "../../../../assets/images/Img-Scroll-3.svg";
import IconScroll_1 from "../../../../assets/icons/Icon-Scroll-1.svg";
import IconScroll_2 from "../../../../assets/icons/Icon-Scroll-2.svg";
import IconScroll_3 from "../../../../assets/icons/Icon-Scroll-3.svg";

const Base = styled.div`
  border: 1px solid black;
  width: 1440px;
  height: 2462px;
  margin: 0 auto;
  background: #07145a;
  position: relative;
`;

const Header = styled.div`
  /* border: 1px solid black; */
  margin: 0 auto;
  width: 1180px;
  background: #07145a;
`;
const SpanTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #e5e5e5;
  margin-top: 50px;
`;
const SpanInfo = styled.div`
  font-weight: 700;
  font-size: 25px;
  line-height: 55px;
  color: #4a73f3;
  top: 83px;
`;
const Btn = styled.div`
  position: absolute;
  left: 130px;
  background: #4a73f3;
  color: #fff;
  width: 360px;
  top: 281px;
  display: block;
  border-radius: 10px;
  text-align: center;
  padding: 20px 10px;
  font-size: 20px;
  font-weight: 700;
  top: 152px;
`;

const Main = styled.div``;
const InfoContainer = styled.div``;
const SpanContainer = styled.div`
  position: absolute;
  height: 30px;
  left: 230px;
`;
const HowSpanTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const HowSpanText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  `;

const ImgScroll1 = styled.div`
  background-image: url(${ImgScroll_1});
  background-size: cover;
  width: 732px;
  height: 619px;
`
const ImgScroll2 = styled.div`
  background-image: url(${ImgScroll_2});
  background-size: cover;
  width: 732px;
  height: 619px;
`
const ImgScroll3 = styled.div`
  background-image: url(${ImgScroll_3});
  background-size: cover;
  width: 732px;
  height: 619px;
`


function HomeScrollHow() {
  return (
    <>
      <Base>
        <Header>
          <SpanTitle>어떻게 사용하나요?</SpanTitle>
          <SpanInfo>
            내가 이들 중 한 명이라면! 누구나 사용할 수 있습니다!!
          </SpanInfo>
          <Btn>유니콘 판별기 사용하기</Btn>
        </Header>
        <Main>
          <InfoContainer>
            <ImgScroll1 style={{position: "absolute", left: "708px",top: "259px", overflow:"hidden"}}/>
            <SpanContainer style={{ top: "658px" }}>
              <img src={IconScroll_1} alt="" style={{position: "absolute",height: "80px",marginTop: "-2%",marginLeft: "-22%",}}/>
              <HowSpanTitle>CSV 파일 업로드</HowSpanTitle>
              <HowSpanText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </HowSpanText>
            </SpanContainer>
          </InfoContainer>
          <InfoContainer>
          <ImgScroll2 style={{position: "absolute",height: "618.98px",left: "708px",top: "1051px",}}/>
            <SpanContainer style={{ top: "1433px", }} >
              <img src={IconScroll_2} alt="" style={{ position: "absolute", height: "80px", marginTop: "-2%", marginLeft: "-22%", }} />
              <HowSpanTitle>기본 정보 입력</HowSpanTitle>
              <HowSpanText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </HowSpanText>
            </SpanContainer>
          </InfoContainer>
          <InfoContainer>
            <ImgScroll3 style={{ position: "absolute", height: "618.98px", left: "708px", top: "1843px", }}/>
            <SpanContainer style={{ top: "2236px" }}>
              <img src={IconScroll_3} alt="" style={{ position: "absolute", height: "80px", marginTop: "-2%", marginLeft: "-22%", }} />
              <HowSpanTitle>LTV 결과 확인</HowSpanTitle>
              <HowSpanText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </HowSpanText>
            </SpanContainer>
          </InfoContainer>
        </Main>
      </Base>
    </>
  );
}

export default HomeScrollHow;
