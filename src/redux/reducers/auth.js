const initialState = {
  token: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_AUTH":
      return { ...state, token: action.token };
    case "LOGOUT_AUTH":
      return { ...state, token: null };
    default:
      return state;
  }
};
