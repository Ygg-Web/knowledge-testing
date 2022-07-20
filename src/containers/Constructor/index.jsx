import { useSelector } from "react-redux";
import { DescriptionTest } from "./StepConstructor/DescriptionTest";
import { ConfigureTest } from "./StepConstructor/ConfigureTest";
import classes from "./Constructor.module.scss";

const stepsConfigTest = {
  0: DescriptionTest,
  1: ConfigureTest,
};

export const Constructor = () => {
  const step = useSelector(({ maker }) => maker.step);
  const Step = stepsConfigTest[step];

  const onSubmitHandler = (e) => e.preventDefault();

  return (
    <>
      <div className={classes.wrapper}>
        <h1>Создайте свой тест</h1>
        <form onSubmit={onSubmitHandler}>
          <Step />
        </form>
      </div>
    </>
  );
};
