import React, { useState } from "react";
import { DiscriptionTest } from "../../components/StepConstructor/DiscriptionTest";
import { ConfigureTest } from "../../components/StepConstructor/ConfigureTest";

const stepsCreateTest = {
  0: DiscriptionTest,
  1: ConfigureTest,
};

export const Constructor = () => {
  const [step, setStep] = useState(0);
  const Step = stepsCreateTest[step];

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  //прокинуть контекс

  return (
    <div className="constructor">
      <div className="constructor__inner">
        <h1>Создайте свой тест</h1>
        <Step />
      </div>
    </div>
  );
};
