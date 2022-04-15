import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TestEnd } from "../TestItem/TestEnd";
import { Loader } from "../UI/Loader";
import { ActiveTestItem } from "../TestItem/ActiveTestItem";
import { goTestAgain } from "../../redux/actions/test";

export const StartTest = ({ state, onClickAnswerId, onAgain }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(goTestAgain());
    };
  }, []);
  return (
    <div className="question">
      {state.loading || !state.test.unit.length ? (
        <Loader />
      ) : state.isFinished ? (
        <TestEnd
          results={state.results}
          test={state.test.unit}
          onAgain={onAgain}
        />
      ) : (
        <ActiveTestItem
          question={state.test.unit[state.activeQuestion].question}
          answers={state.test.unit[state.activeQuestion].answers}
          onClick={onClickAnswerId}
          lengthTest={state.test.unit.length}
          numberAnswer={state.activeQuestion + 1}
          answerMark={state.answerMark}
        />
      )}
    </div>
  );
};
