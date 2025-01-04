import { ReactElement, useState } from "react";

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  return {
    currentStep,
    step: steps[currentStep],
    next,
    prev,
    goToStep,
    steps,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
};
