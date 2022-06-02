import {
  Container,
  ImageBottom,
  ImageTop,
  Question,
  Option,
  QuestionContainer,
  RightSideContainer,
  SideContainer,
  Title,
  OptionsContainer,
  NextStepButton,
} from "./styles";

import LogoExtendedImg from "../../assets/logo-extended.png";
import ManImg from "../../assets/man.png";

interface Step1Props {
  onNextStepClick: () => void;
  handleOption: (option: string) => void;
}

export function Step1(props: Step1Props) {
  const { onNextStepClick = () => null, handleOption = () => null } = props;
  const answers = ["Linda", "Normal", "Horrível"];

  return (
    <Container>
      <SideContainer>
        <ImageTop src={LogoExtendedImg} />
        <ImageBottom src={ManImg} />
      </SideContainer>

      <RightSideContainer>
        <Title>AJUDE-NOS A CRESCER!</Title>
        <QuestionContainer>
          <Question>O que achou da nossa loja?</Question>
          <OptionsContainer>
            {answers.map((answer, index) => (
              <Option key={index} onClick={() => handleOption(answer)}>
                {answer}
              </Option>
            ))}
          </OptionsContainer>
        </QuestionContainer>
        <NextStepButton onClick={onNextStepClick}>Seguinte</NextStepButton>
      </RightSideContainer>
    </Container>
  );
}
