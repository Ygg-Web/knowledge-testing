import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button, renderInputControlsForForm } from "../../components/UI";
import { createControl, validateForm, updateValue } from "../../helpers";
import { auth } from "../../redux/actions/auth";
import classes from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";

const initialState = {
  formControls: {
    email: createControl(
      {
        label: "Введите ваш ID",
        type: "email",
        errorMessage: "Введите корректные даннные",
      },
      { required: true, email: true }
    ),
    password: createControl(
      {
        label: "Введите пароль",
        type: "password",
        errorMessage: "Введите корректный пароль",
      },
      { required: true, minLength: 6 }
    ),
  },
  isFormReady: false,
};

export const Login = () => {
  const [localState, setLocalState] = useState(initialState);
  const { loading } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || "/";

  const onSumbmitHandler = (e) => e.preventDefault();

  const onChangeHandler = (e, prevState, controlField) => {
    const nextControls = updateValue(e, prevState, controlField);
    setLocalState((prev) => ({
      ...prev,
      formControls: nextControls,
      isFormReady: validateForm(nextControls),
    }));
  };

  const loginHandler = () => {
    dispatch(
      auth(
        true,
        localState.formControls.email.value,
        localState.formControls.password.value
      )
    ).then((isSuccess) => {
      isSuccess && navigate(fromPage, { replace: true });
    });
  };

  return (
    <div className={classes.authorization}>
      <h1>Авторизация</h1>
      <form onSubmit={onSumbmitHandler}>
        {renderInputControlsForForm(
          localState.formControls,
          onChangeHandler,
          "registration"
        )}
        <div className={classes.buttons}>
          <Button
            onClick={loginHandler}
            disabled={!localState.isFormReady || loading}
          >
            Войти
          </Button>
          <Link to="/signup">
            <Button>Зарегистрироваться</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
