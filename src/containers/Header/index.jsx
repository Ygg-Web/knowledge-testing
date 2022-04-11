import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <Link to="/">
            <div className="header__logo">
              <img src="/assets/logo.png" alt="logo" />
              <h1>Knowledge-check</h1>
            </div>
          </Link>
          <nav className="header__menu">
            <ul className="menu">
              <li className="active">
                <Link to="/"> Главная</Link>
              </li>
              <li>
                <Link to="/constructor">Конструктор</Link>
              </li>
              <li>
                <Link to="/">Подборки</Link>
              </li>
              <li>
                <Link to="/">Материалы</Link>
              </li>
            </ul>
          </nav>
          <Link to="/auth">
            <div className="header__login">
              <img src="/assets/login.png" alt="login" />
              Вход
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
