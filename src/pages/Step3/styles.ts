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
  align-items: flex-start;

  width: 672px;
  height: 480px;

  margin-top: 50px;

  padding: 0 30px;

  border-radius: 50px;

  background-color: #02314b;

  box-shadow: 8px 8px rgba(0, 0, 0, 0.04);
`;

export const ChooseOption = styled.p`
  font-size: 25px;
  font-weight: bold;

  color: #fff;

  margin-top: 43px;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RadioLabel = styled.label`
  font-size: 20px;
  font-weight: bold;

  color: #ffe600;
`;

export const Divider = styled.hr`
  width: 596px;
  height: 0.5px;

  color: #fff;

  margin-top: 46px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-top: 25px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: 25px;
  font-weight: bold;

  color: #fff;
`;

export const Input = styled.input`
  width: 300px;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextAreaLabel = styled.label`
  font-size: 25px;
  font-weight: bold;

  color: #fff;
`;

export const TextArea = styled.textarea`
  width: 596px;
  height: 172px;
`;

export const FinishFeedbackButton = styled.button`
  width: 149px;
  height: 64px;

  font-size: 25px;
  font-weight: bold;

  border-radius: 6px;

  color: #02314b;

  background-color: #ffe600;
`;
