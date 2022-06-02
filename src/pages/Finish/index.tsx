import {
  Container,
  ImageBottom,
  ImageTop,
  RightSideContainer,
  SideContainer,
  SuccessImage,
  SuccessText,
} from "./styles";

import LogoExtendedImg from "../../assets/logo-extended.png";
import ManImg from "../../assets/man.png";

export function Finish() {
  return (
    <Container>
      <SideContainer>
        <ImageTop src={LogoExtendedImg} />
        <ImageBottom src={ManImg} />
      </SideContainer>
      <RightSideContainer>
        <SuccessImage src="" />
        <SuccessText>Enviado com Sucesso.</SuccessText>
      </RightSideContainer>
    </Container>
  );
}
