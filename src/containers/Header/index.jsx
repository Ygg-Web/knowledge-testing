import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";

export const Header = () => {
  const isAuth = useSelector(({ auth }) => !!auth.token);
  const dispatch = useDispatch();

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
          {isAuth ? (
            <Link to="/">
              <div className="header__login" onClick={() => dispatch(logout())}>
                <img src="/assets/logout.png" alt="logout" />
                Выход
              </div>
            </Link>
          ) : (
            <Link to="/auth">
              <div className="header__login">
                <img src="/assets/login1.png" alt="login" />
                Вход
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
