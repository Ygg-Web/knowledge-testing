import { DescriptionTest } from "../../components/StepConstructor/DescriptionTest";
import { ConfigureTest } from "../../components/StepConstructor/ConfigureTest";
import { useSelector } from "react-redux";

const stepsConfigTest = {
  0: DescriptionTest,
  1: ConfigureTest,
};

export const Constructor = () => {
  const step = useSelector(({ maker }) => maker.step);
  const Step = stepsConfigTest[step];
  console.log(step);

  return (
    <div className="constructor">
      <div className="constructor__inner">
        <h1>Создайте свой тест</h1>
        <Step />
      </div>
    </div>
  );
};
