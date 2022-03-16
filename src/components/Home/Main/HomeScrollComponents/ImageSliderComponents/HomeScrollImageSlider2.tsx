import React from "react";
import styled from "styled-components";
import ImgSliderAnswer from "../../../../assets/images/ImgSlider-Answer.svg";
import ImgSliderQuestion1 from "../../../../assets/images/ImgSlider-Question1.svg";
import ImgSliderQuestion2 from "../../../../assets/images/ImgSlider-Question2.svg";
import ImgSliderQuestion3 from "../../../../assets/images/ImgSlider-Question3.svg";

const Container = styled.div`
  /* border: 1px solid black; */
  background: #f5f5f5;
  width: 1440px;
  height: 856px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.div`
  /* border: 1px solid black; */
  top: 50px;
  left: 130px;
  position: relative;
  max-width: 1158px;
`;
const SpanTitle = styled.div`
  /* border: 1px solid black; */
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #000000;
`;
const SpanInfo = styled.div`
  /* border: 1px solid black; */
  font-weight: 700;
  font-size: 25px;
  line-height: 55px;
  color: #4a73f3;
`;
const Btn = styled.div`
  background: #4a73f3;
  color: #fff;
  width: 360px;
  height: 54px;
  border-radius: 10px;
  text-align: center;
  padding: 20px 10px;
  font-size: 20px;
  font-weight: 700;
`;
const Main = styled.div`
  /* border: 1px solid black; */
  position: absolute;
  height: 396px;
  width: 1158px;
  top: 263px;
  left: 130px;
`;

const QuestionBalloon = styled.div`
  /* border: 1px solid black; */
  left: 480px;
  position: relative;
  background: #2d59e3;
  padding: 24px 32px;
  width: 553px;
  height: 143px;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05));
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 24px;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left-color: #2d59e3;
    border-right: 0;
    margin-top: -8px;
    margin-right: -8px;
  }
`;
const MainTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
`;
const MainText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 8px 0px;
`;

const AnswerContainer = styled.div`
  /* border: 1px solid black; */
`;
const AnswerBalloon = styled.div`
  /* border: 1px solid black; */
  bottom: 0;
  left: 150px;
  position: absolute;
  background: #ffffff;
  padding: 24px 32px;
  width: 553px;
  height: 173px;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05));
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 24px;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right-color: #ffffff;
    border-left: 0;
    margin-top: -8px;
    margin-left: -8px;
  }
`;

const AnswerImg = styled.div`
  /* border: 1px solid black; */
  bottom: 43px;
  position: absolute;
  padding: 30px;
  width: 130px;
  height: 130px;
  background: #ffffff;
  box-shadow: 0px 0px 7.35px rgba(0, 0, 0, 0.1),
    0px 4.9px 7.35px rgba(0, 0, 0, 0.1);
  border-radius: 19.11px;
`;

function HomeScrollImageSlide() {
  return (
    <>
      <Container>
        <Header>
          <SpanTitle>누가 사용할 수 있나요?</SpanTitle>
          <SpanInfo>
            내가 이들 중 한 명이라면! 누구나 사용할 수 있습니다!!
          </SpanInfo>
          <Btn>유니콘 판별기 사용하기</Btn>
        </Header>
        <Main>
          <QuestionBalloon>
            <MainTitle>나기획 Product Manager</MainTitle>
            <MainText>
              하,,, 어떻게 CEO를 제대로 설득할 수 있는거야??
              <br />
              내가 가져간 기획안이 계속 막혀서 답답해...
            </MainText>
          </QuestionBalloon>
          <img
            src={ImgSliderQuestion2}
            alt=""
            style={{ top: "0", left: "1058px", position: "absolute" }}
          />
          <AnswerContainer>
            <AnswerBalloon>
              <MainTitle style={{ color: "#0420BF" }}>유니콘</MainTitle>
              <MainText style={{ color: "#07145A" }}>
                명확한 데이터를 통한 인사이트를 기획안에 첨부해보는건 어때?
                <br />
                떡잎 판별기를 사용해서 무엇이 문제인지 파악하고 기획해봐!!
              </MainText>
            </AnswerBalloon>
            <AnswerImg>
              <img src={ImgSliderAnswer} alt="" />
            </AnswerImg>
          </AnswerContainer>
        </Main>
      </Container>
    </>
  );
}

export default HomeScrollImageSlide;
