import axios from "axios";

export const successAuth = (token) => ({
  type: "SUCCESS_AUTH",
  token,
});

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: "LOGOUT_AUTH",
  };
};

export const autoLogout = (time) => (dispatch) => {
  setTimeout(() => {
    dispatch(logout());
  }, time * 1000);
};

export const autoLogin = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(logout());
  } else {
    const expirationDate = localStorage.getItem("expirationDate");
    if (expirationDate <= new Date()) {
      dispatch(logout());
    } else {
      dispatch(successAuth(token));
      dispatch(
        autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
      );
    }
  }
};

export const auth = (email, password, isLogin) => async (dispatch) => {
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  const url = isLogin
    ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDULKurhxIEGxtxAzwl5CNGthK33_ZIZKU"
    : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDULKurhxIEGxtxAzwl5CNGthK33_ZIZKU";

  const { data } = await axios.post(url, authData);
  const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

  localStorage.setItem("token", data.idToken);
  localStorage.setItem("userId", data.localId);
  localStorage.setItem("expirationDate", expirationDate);

  dispatch(successAuth(data.idToken));
  dispatch(autoLogout(data.expiresIn));
};
