import { updateProfile } from "firebase/auth";
import { Axios } from "../../axios";
import {
  deleteProfile,
  login,
  logoutSession,
  signup,
  upload,
} from "../../firebase";

export const setLoading = (data) => ({
  type: "SET_LOADING",
  data,
});

export const setUser = (token, email, name, avatar) => ({
  type: "SET_USER",
  token,
  email,
  name,
  avatar,
});

export const logout = () => {
  logoutSession();
  return {
    type: "LOGOUT_AUTH",
  };
};

export const deleteUser = () => {
  deleteProfile();
  return {
    type: "DELETE_USER",
  };
};

export const addNameUserInBD = (name) => async (dispatch, getState) => {
  try {
    await Axios.post("/username.json", getState().auth.displayName);
  } catch (e) {
    console.log(e);
  }
};

export const auth =
  (isLogin, email, password, displayName, avatar) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      if (isLogin) {
        const { user } = await login(email, password);

        dispatch(
          setUser(user.accessToken, user.email, user.displayName, user.photoURL)
        );
      } else {
        const { user } = await signup(email, password);
        const avatarUrl = await upload(avatar, user);

        await updateProfile(user, {
          displayName,
          photoURL: avatarUrl,
        });

        dispatch(
          setUser(user.accessToken, user.email, user.displayName, user.photoURL)
        );
      }
      alert("Добро пожаловать!");
      dispatch(setLoading(false));
      return true;
    } catch (e) {
      console.log(e);
      switch (e.message) {
        case "Firebase: Error (auth/user-not-found).":
          alert("Такого пользователя не существует!");
          break;
        case "Firebase: Error (auth/wrong-password).":
          alert("Не правильно набран пароль. Попробуйте еще раз!");
          break;
        case "Firebase: Error (auth/email-already-in-use).":
          alert("Пользователь с таким Email уже существует!");
          break;
        default:
          alert("Произошла ошибка!");
      }
      dispatch(setLoading(false));
      return false;
    }
  };
