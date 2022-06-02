import {
  Container,
  ImageBottom,
  ImageTop,
  SideContainer,
  RightSideContainer,
  Title,
  QuestionContainer,
  Question,
  NextQuestionButton,
  FinishFeedbackButton,
} from "./styles";

import LogoExtendedImg from "../../assets/logo-extended.png";
import ManImg from "../../assets/man.png";

interface Step2Props {
  handleNextStep: () => void;
  handleFinishFeedback: () => void;
}

export function Step2(props: Step2Props) {
  const { handleNextStep, handleFinishFeedback } = props;

  return (
    <Container>
      <SideContainer>
        <ImageTop src={LogoExtendedImg} />
        <ImageBottom src={ManImg} />
      </SideContainer>
      <RightSideContainer>
        <Title>AJUDE-NOS A CRESCER!</Title>
        <QuestionContainer>
          <Question>Deseja mais alguma coisa?</Question>
          <NextQuestionButton onClick={handleNextStep}>
            Deixar uma sugestão ou reclamação
          </NextQuestionButton>
          <FinishFeedbackButton onClick={handleFinishFeedback}>
            Não, obrigado
          </FinishFeedbackButton>
        </QuestionContainer>
      </RightSideContainer>
    </Container>
  );
}
