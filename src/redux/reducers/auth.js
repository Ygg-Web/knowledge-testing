const initialState = {
  token: null,
  email: "",
  displayName: "",
  avatar: "",
  loading: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.data };
    case "SET_USER":
      return {
        ...state,
        token: action.token,
        email: action.email,
        displayName: action.name,
        avatar: action.avatar,
      };
    case "LOGOUT_AUTH":
      return initialState;
    default:
      return state;
  }
};
