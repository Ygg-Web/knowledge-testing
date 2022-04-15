import React from "react";
import { Button } from "../UI/Button";

export const Registration = () => {
  return (
    <div className="registration">
      <form className="registration__form">
        <h1>Форма регистрации</h1>
        <div className="form__controls">
          <div className="form__input">
            <label htmlFor="login">Логин</label>
            <input type="text" id="login" placeholder="Логин" />
          </div>
          <div className="form__input">
            <label htmlFor="login">Email</label>
            <input type="text" id="login" placeholder="Email" />
          </div>
          <div className="form__input">
            <label htmlFor="login">Пароль</label>
            <input type="text" id="login" placeholder="Пароль" />
          </div>
          <div className="form__input">
            <label htmlFor="login">Повторите пароль</label>
            <input type="text" id="login" placeholder="Пароль" />
          </div>
          <div>avatar</div>
        </div>
        <Button>Зарегистрироваться</Button>
      </form>
    </div>
  );
};
