import React from "react";

export const Auth = () => {
  return (
    <div className="authorization">
      <div className="authorization__inner">
        <h1>Авторизация</h1>
        <div className="authorization__login">
          <label>Логин</label>
          <input
            className="control__input"
            type="text"
            name="login"
            placeholder="Введите логин"
          />
        </div>
        <div className="authorization__passwd">
          <label>Пароль</label>
          <input
            className="control__input"
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
        <div className="authorization__buttons">
          <button className="btn">Войти</button>
          <button className="btn">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};
