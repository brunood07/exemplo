import {
  Container,
  ImageBottom,
  ImageTop,
  SideContainer,
  RightSideContainer,
  Title,
  QuestionContainer,
  ChooseOption,
  RadioContainer,
  Divider,
  RadioOptionContainer,
  RadioLabel,
  InputsContainer,
  InputContainer,
  InputLabel,
  Input,
  TextAreaContainer,
  TextArea,
  TextAreaLabel,
  FinishFeedbackButton,
} from "./styles";

import LogoExtendedImg from "../../assets/logo-extended.png";
import ManImg from "../../assets/man.png";

interface Step3Props {
  handleSendForm: () => void;
}

export function Step3(props: Step3Props) {
  const { handleSendForm } = props;

  return (
    <Container>
      <SideContainer>
        <ImageTop src={LogoExtendedImg} />
        <ImageBottom src={ManImg} />
      </SideContainer>
      <RightSideContainer>
        <Title>AJUDE-NOS A CRESCER!</Title>
        <QuestionContainer>
          <ChooseOption>Selecione uma opção:</ChooseOption>
          <form>
            <RadioContainer>
              <RadioOptionContainer>
                <input
                  type="radio"
                  name="option"
                  id="reclamacao"
                  value="Reclamação"
                />
                <RadioLabel htmlFor="reclamacao">RECLAMAÇÃO</RadioLabel>
              </RadioOptionContainer>

              <RadioOptionContainer>
                <input
                  type="radio"
                  name="option"
                  id="sugestao"
                  value="Sugestão"
                />
                <RadioLabel htmlFor="sugestao">SUGESTÃO</RadioLabel>
              </RadioOptionContainer>
            </RadioContainer>
            <Divider />
            <InputsContainer>
              <InputContainer>
                <InputLabel htmlFor="nome">Nome</InputLabel>
                <Input id="nome" />
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="telefone">Nº Telefone</InputLabel>
                <Input id="telefone" />
              </InputContainer>
            </InputsContainer>
            <TextAreaContainer>
              <TextAreaLabel htmlFor="comentario">Comentário</TextAreaLabel>
              <TextArea id="comentario" />
            </TextAreaContainer>
          </form>
        </QuestionContainer>
        <FinishFeedbackButton
          type="submit"
          onClick={(values) => handleSendForm()}
        >
          Enviar
        </FinishFeedbackButton>
      </RightSideContainer>
    </Container>
  );
}
