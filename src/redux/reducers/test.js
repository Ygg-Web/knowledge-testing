const initialState = {
  tests: [],
  test: null,
  activeQuestion: 0,
  results: {},
  answerMark: null,
  isFinished: false,
  loading: false,
};

export const test = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADED":
      return { ...state, loading: action.data };
    case "SET_TESTS":
      return { ...state, tests: action.tests };
    case "SET_TEST":
      return { ...state, test: action.test };

    case "SET_RESULTS_TEST":
      return {
        ...state,
        results: action.results,
        answerMark: action.answerMark,
      };
    case "FINISH_TEST":
      return {
        ...state,
        isFinished: true,
      };
    case "NEXT_QUESTION_TEST":
      return {
        ...state,
        activeQuestion: action.number,
        answerMark: null,
      };

    case "GO_TEST_AGAIN":
      return {
        ...state,
        activeQuestion: 0,
        results: {},
        answerMark: null,
        isFinished: false,
      };
    default:
      return state;
  }
};
