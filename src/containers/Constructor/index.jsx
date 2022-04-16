import { DescriptionTest } from "../../components/StepConstructor/DescriptionTest";
import { ConfigureTest } from "../../components/StepConstructor/ConfigureTest";
import { useSelector } from "react-redux";
import classes from "./Constructor.module.scss";

const stepsConfigTest = {
  0: DescriptionTest,
  1: ConfigureTest,
};

export const Constructor = () => {
  const step = useSelector(({ maker }) => maker.step);
  const Step = stepsConfigTest[step];

  return (
    <div className={classes.wrapper}>
      <h1>Создайте свой тест</h1>
      <Step />
    </div>
  );
};
