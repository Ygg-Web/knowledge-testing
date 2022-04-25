import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  renderInputControlsForForm,
  UploadFile,
} from "../../components/UI";
import {
  createControl,
  updateSrcFile,
  updateValue,
  validateForm,
  readFile,
} from "../../helpers";
import { auth } from "../../redux/actions/auth";

import classes from "./SingUp.module.scss";

const initialState = {
  formControls: {
    login: createControl(
      {
        label: "Логин",
        type: "text",
        placeholder: "Логин",
        errorMessage: "Введите корректные даннные",
      },
      { required: true, minLength: 3 }
    ),
    email: createControl(
      {
        label: "Email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Введите корректные даннные",
      },
      { required: true, email: true }
    ),
    password: createControl(
      {
        label: "Пароль",
        type: "password",
        placeholder: "Пароль",
        errorMessage: "Введите корректный пароль",
      },
      { required: true, minLength: 6 }
    ),
    repeatPassword: createControl(
      {
        label: "Повторите пароль",
        type: "password",
        placeholder: "Пароль",
        errorMessage: "Введите корректный пароль",
      },
      { required: true, minLength: 6 }
    ),
  },
  avatarControl: {
    label: "Загрузить аватар!",
    errorMessage: "Загрузите изображение в формате jpeg или png",
    extension: ["image/png", "image/jpeg"],
    valid: false,
    touched: false,
    src: "",
  },
  avatar: "",
  isInputReady: false,
};

export const SingUp = () => {
  const [localState, setLocalState] = useState(initialState);
  const loading = useSelector(({ auth }) => auth.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgTeg = useRef(null);

  const onSumbmitHandler = useCallback((e) => e.preventDefault(), []);

  const onChangeHandler = (e, prevState, controlField) => {
    const nextControls = updateValue(e, prevState, controlField);

    setLocalState((prev) => ({
      ...prev,
      formControls: nextControls,
      isInputReady: validateForm(nextControls),
    }));
  };

  const imageChangeHandler = useCallback(async (e) => {
    const image = e.target.files[0];
    const result = await readFile(image);
    const updateAvatar = updateSrcFile(localState.avatarControl, image, result);
    imgTeg.current.src = updateAvatar.src;

    setLocalState((prev) => ({
      ...prev,
      avatarControl: updateAvatar,
      avatar: image,
    }));
  }, []);

  const registerHandler = useCallback(async () => {
    const isSuccess = await dispatch(
      auth(
        false,
        localState.formControls.email.value,
        localState.formControls.password.value,
        localState.formControls.login.value,
        localState.avatar
      )
    );

    isSuccess && navigate("/", { replace: true });
  }, [localState.formControls, localState.avatar]);

  const isFormReady = (() => {
    return (
      localState.isInputReady &&
      localState.avatarControl.valid &&
      localState.formControls.password.value ===
        localState.formControls.repeatPassword.value
    );
  })();

  return (
    <div className={classes.registration}>
      <h1>Форма регистрации</h1>
      <form onSubmit={onSumbmitHandler}>
        <UploadFile
          control={localState.avatarControl}
          image={imgTeg}
          onChange={imageChangeHandler}
          typeStyle={"small"}
        />
        <div className={classes.controls}>
          {renderInputControlsForForm(
            localState.formControls,
            onChangeHandler,
            "small"
          )}
        </div>
      </form>
      <div className={classes.buttons}>
        <Link to="/login">
          <Button>Войти</Button>
        </Link>
        <Button onClick={registerHandler} disabled={!isFormReady || loading}>
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};
