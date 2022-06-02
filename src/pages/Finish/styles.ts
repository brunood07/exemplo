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
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const SuccessImage = styled.img`
  width: 167px;
  height: 167px;
`;

export const SuccessText = styled.p`
  font-size: 40px;
  font-weight: semi-bold;

  color: #fff;

  margin-top: 40px;
`;
