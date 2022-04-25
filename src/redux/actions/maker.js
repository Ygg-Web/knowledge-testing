import { Axios } from "../../axios";

export const nextStepConfig = () => ({
  type: "NEXT_STEP_CONFIG",
});

export const addDescriptionTest = (description) => ({
  type: "ADD_DESCRIPTION_TEST",
  description,
});

export const addQuestionInUnit = (question) => ({
  type: "ADD_QUESTION_IN_UNIT",
  question,
});

export const defaultTest = () => ({
  type: "DEFAULT_TEST",
});

export const resetTest = () => ({
  type: "RESET_TEST",
});

export const createUnitWithQuestion = () => async (dispatch, getState) => {
  console.log(getState().maker.test);

  await Axios.post("/tests.json", getState().maker.test);
  dispatch(defaultTest());
  // try {
  //   alert("Тест успешно создан!");
  // } catch (e) {
  //   alert("Произошла ошибка при отправке данных на сервер!");
  // }
};
