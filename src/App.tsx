import { useState } from "react";
import {
  Container,
  Image,
  InsideContainer,
  StepButton,
  SubTitle,
  Title,
} from "./styles";

import LogoImg from "./assets/logo.png";
import { Step1 } from "./pages/Step1";
import { Step2 } from "./pages/Step2";
import { Finish } from "./pages/Finish";
import { Step3 } from "./pages/Step3";

function App() {
  const [currentStep, setCurrentStep] = useState("start");
  const [answer, setAnswer] = useState("");

  const handleNextStep = () => {
    if (currentStep === "start") {
      setCurrentStep("first");
    }

    if (currentStep === "first" && answer !== "") {
      setCurrentStep("second");
    }

    if (currentStep === "second") {
      setCurrentStep("third");
    }

    if (currentStep === "third") {
      setCurrentStep("end");
    }
  };

  const handleOption = (option: string) => {
    setAnswer(option);
  };

  const handleFinishFeedback = () => {
    setCurrentStep("end");
  };

  const handleSendForm = (values) => {
    try {
      console.log(values);
      setCurrentStep("end");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {currentStep === "start" && (
        <Container>
          <InsideContainer>
            <Image src={LogoImg} />
            <Title>BEM VINDO AO FEEDNET</Title>
            <SubTitle>Ajude-nos a crescer</SubTitle>
            <StepButton onClick={handleNextStep}>Começar</StepButton>
          </InsideContainer>
        </Container>
      )}

      {currentStep === "first" && (
        <Step1 onNextStepClick={handleNextStep} handleOption={handleOption} />
      )}

      {currentStep === "second" && (
        <Step2
          handleFinishFeedback={handleFinishFeedback}
          handleNextStep={handleNextStep}
        />
      )}

      {currentStep === "third" && <Step3 handleSendForm={handleSendForm} />}

      {currentStep === "end" && <Finish />}
    </>
  );
}

export default App;
