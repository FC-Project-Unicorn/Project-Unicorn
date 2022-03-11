import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LeftSectionDisplay } from "../../../types";
import { useRecoilState } from "recoil";
import { isShowError, isFileError } from "../../../store/inputAtom";
import { StepBtnState } from "../../../store/StepBtnAtom";

const Step = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  cursor: pointer;
`;

const StepLogo = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

const StepTitle = styled.div`
  margin-left: 8px;
  > * {
    display: block;
    font-family: "Spoqa Han Sans Neo", sans-serif;
  }
`;

const StepText = styled.span`
  font-size: 12px;
  line-height: 17px;
  color: #000000;
`;

const StepDesc = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
const Line = styled.div`
  margin: 20px 20px;
  width: 1px;
  height: 85px;
  border-left: 1px solid #c0c0c0;
`;

type displayProps = {
  display: LeftSectionDisplay;
};

function LeftSectionItem({ display }: displayProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [stepBtn, setStepBtn] = useRecoilState(StepBtnState);

  const [errorStep1, setErrorStep1] = useRecoilState(isFileError);
  const [errorStep2, setErrorStep2] = useRecoilState(isShowError);

  const setColor = () => {
    switch (location.pathname) {
      case "/ltvCal/input":
        return display.step === "1" || display.step === "2"
          ? "#0420BF"
          : "#C0C0C0";
      case "/ltvCal/result":
        return "#0420BF";
      default:
        return display.step === "1" ? "#0420BF" : "#C0C0C0";
    }
  };

  const handleClick = () => {
    if (display.step === "2" && stepBtn[0].done) {
      navigate("/ltvCal/input");
    } else if (display.step === "2" && !stepBtn[0].done) {
      setErrorStep1(true);
    } else if (display.step === "3" && stepBtn[1].done) {
      console.log(display.step);
      console.log(stepBtn[1].done);
      setErrorStep2(false);
      navigate("/ltvCal/result");
    } else setErrorStep2(true);
  };

  return (
    <>
      <Step key={display.step} onClick={handleClick}>
        <StepLogo color={setColor()}>
          {display.done ? (
            <img
              src={require(`../../../assets/icons/stepComplete.svg`)}
              alt={`step${display.step}`}
              style={{ top: "0", left: "0" }}
            />
          ) : (
            <img
              src={require(`../../../assets/icons/step1.svg`)}
              alt={`step${display.step}`}
            />
          )}
        </StepLogo>
        <StepTitle>
          <StepText>STEP{display.step}</StepText>
          <StepDesc>{display.title}</StepDesc>
        </StepTitle>
      </Step>
      {display.step === "3" ? null : <Line />}
    </>
  );
}

export default LeftSectionItem;