import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100vh;

  background-color: #00273d;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 595px;
  height: 100vh;

  margin-left: 78px;

  background-color: #ffe600;
`;

export const ImageTop = styled.img`
  width: 355px;
  height: 91px;

  margin-bottom: 90px;
`;

export const ImageBottom = styled.img`
  width: 537px;
  height: 470px;
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: semi-bold;

  color: #fff;

  margin-top: 86px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 672px;
  height: 361px;

  margin-top: 100px;

  border-radius: 50px;

  background-color: #02314b;

  box-shadow: 8px 8px rgba(0, 0, 0, 0.04);
`;

export const Question = styled.p`
  font-size: 35px;
  font-weight: bold;

  color: #fff;

  margin-top: 43px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

  margin-top: 79px;
`;

export const Option = styled.button`
  width: 139px;
  height: 64px;

  background-color: #00a6ec;

  &:active {
    opacity: 0.7;
  }
`;

export const NextStepButton = styled.button`
  width: 184px;
  height: 64px;

  background: #ffe600;
  border-radius: 6px;

  margin-top: 43px;
`;
