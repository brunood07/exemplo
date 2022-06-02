import { useState } from "react";
import { Container, StartButton } from "./styles";

function App() {
  const [currentStep, setCurrentStep] = useState("start");

  const handleNextStep = () => {
    if (currentStep === "start") {
      setCurrentStep("first");
    }

    if (currentStep === "first") {
      setCurrentStep("second");
    }
  };

  return (
    <>
      {currentStep === "start" && (
        <Container>
          <StartButton onClick={handleNextStep}>Começar</StartButton>
        </Container>
      )}

      {currentStep === "first" && (
        <Container>
          <StartButton onClick={handleNextStep}>Primeiro</StartButton>
        </Container>
      )}

      {currentStep === "second" && (
        <Container>
          <StartButton onClick={handleNextStep}>Segundo</StartButton>
        </Container>
      )}
    </>
  );
}

export default App;
