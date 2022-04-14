import { Axios } from "../../axios";

export const setLoaded = (data) => ({
  type: "SET_LOADED",
  data,
});

export const setTests = (tests) => ({
  type: "SET_TESTS",
  tests,
});

export const setTest = (test) => ({
  type: "SET_TEST",
  test,
});

export const setResultsTest = (results, answerMark) => ({
  type: "SET_RESULTS_TEST",
  results,
  answerMark,
});

export const finishTest = () => ({
  type: "FINISH_TEST",
});

export const nextQuestionTest = (number) => ({
  type: "NEXT_QUESTION_TEST",
  number,
});

export const fetchTests = () => async (dispatch) => {
  dispatch(setLoaded(true));

  try {
    const { data } = await Axios.get("/tests.json");
    const tests = [];

    Object.entries(data).forEach(([key, value]) => {
      tests.push({
        id: key,
        name: value.name,
        discription: value.discription,
        image: value.image,
      });
    });

    dispatch(setTests(tests));
  } catch (e) {
    alert("Ошибка, не удалось получить данные от сервера!");
  }

  dispatch(setLoaded(false));
};

export const goTestAgain = () => ({
  type: "GO_TEST_AGAIN",
});

export const fetchTestById = (id) => async (dispatch) => {
  dispatch(setLoaded(true));
  try {
    const { data } = await Axios.get(`/tests/${id}.json`);
    const test = await data.unit;

    dispatch(setTest(test));
  } catch (e) {
    alert("Ошибка не удалось получить данные от сервера!");
  }

  dispatch(setLoaded(false));
};

const isTestEnd = (state) => {
  return state.activeQuestion + 1 === state.test.length;
};

export const clickAnswerInTest = (answerId) => (dispatch, getState) => {
  const state = getState().test;

  if (state.answerMark) {
    const key = Object.keys(state.answerMark)[0];
    if (state.answerMark[key] === "success") {
      return;
    }
  }

  const questionItem = state.test[state.activeQuestion];
  const results = state.results;

  if (questionItem.rightAnswerId == answerId) {
    if (!results[questionItem.id]) {
      results[questionItem.id] = "success";
    }

    dispatch(setResultsTest(results, { [answerId]: "success" }));

    const timeout = window.setTimeout(() => {
      if (isTestEnd(state)) {
        dispatch(finishTest());
      } else {
        dispatch(nextQuestionTest(state.activeQuestion + 1));
      }
      window.clearTimeout(timeout);
    }, 1000);
  } else {
    results[questionItem.id] = "failed";
    dispatch(setResultsTest(results, { [answerId]: "failed" }));

    const timeout = window.setTimeout(() => {
      if (isTestEnd(state)) {
        dispatch(finishTest());
      } else {
        dispatch(nextQuestionTest(state.activeQuestion + 1));
      }
      window.clearInterval(timeout);
    }, 1000);
  }
};
