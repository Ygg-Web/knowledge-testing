const initialState = {
  step: 0,
  test: {
    name: "",
    description: "",
    image: "",
    authorName: "",
    authorEmail: "",
    authorAvatar: "",
    unit: [],
  },
};

export const maker = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_STEP_CONFIG":
      return { ...state, step: ++state.step };
    // case "FIRST_STEP_CONFIG":
    //   return { ...state, step: 0 };
    case "RESET_TEST":
      return {
        ...state,
        step: 0,
        test: {
          name: "",
          description: "",
          image: "",
          unit: [],
        },
      };
    case "ADD_DESCRIPTION_TEST":
      return { ...state, test: { ...state.test, ...action.description } };
    case "ADD_QUESTION_IN_UNIT":
      return {
        ...state,
        test: { ...state.test, unit: [...state.test.unit, action.question] },
      };
    case "DEFAULT_TEST":
      return {
        ...state,
        test: { name: "", description: "", image: "", unit: [] },
      };
    default:
      return state;
  }
};
