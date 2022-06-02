import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const InsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 487px;
`;

export const StepButton = styled.button`
  width: 184px;
  height: 64px;

  border: 0;
  border-radius: 6px;

  background-color: #00a6ec;
`;

export const Image = styled.img`
  width: 274px;
  height: 275px;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #00273d;
`;

export const SubTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #00273d;
`;
