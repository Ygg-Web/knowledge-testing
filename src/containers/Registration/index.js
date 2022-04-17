import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  renderInputControlsForForm,
  UploadFile,
} from "../../components/UI";
import classes from "./Registration.module.scss";
import {
  createControl,
  updateSrcFile,
  updateValue,
  validateForm,
  readFile,
} from "../../helpers";
import { auth } from "../../redux/actions/auth";

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
  isFormReady: false,
};

export const Registration = () => {
  const [localState, setLocalState] = useState(initialState);
  const dispatch = useDispatch();
  const imgTeg = useRef(null);

  const onSumbmitHandler = (e) => e.preventDefault();

  const onChangeHandler = (e, prevState, controlField) => {
    const nextControls = updateValue(e, prevState, controlField);

    setLocalState((prev) => ({
      ...prev,
      formControls: nextControls,
      isFormReady: validateForm(nextControls),
    }));
  };

  const imageChangeHandler = async (e) => {
    const image = e.target.files[0];
    const result = await readFile(image);
    const updateAvatar = updateSrcFile(localState.avatarControl, image, result);

    imgTeg.current.src = updateAvatar.src;
    setLocalState((prev) => ({ ...prev, avatarControl: updateAvatar }));
  };

  const registerHandler = () => {
    dispatch(
      auth(
        localState.formControls.email.value,
        localState.formControls.password.value,
        false
      )
    );
  };

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
      <Button
        onClick={registerHandler}
        disabled={!localState.isFormReady && !localState.avatarControl.valid}
      >
        Зарегистрироваться
      </Button>
    </div>
  );
};
