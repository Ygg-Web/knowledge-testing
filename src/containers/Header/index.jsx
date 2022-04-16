import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { Button } from "../../components/UI/Button";
import classes from "./Header.module.scss";
import { Container } from "../../hoc/Container";

export const Header = () => {
  const isAuth = useSelector(({ auth }) => !!auth.token);
  const dispatch = useDispatch();

  const navLinks = [
    { name: "Главная", path: "/", default: "active" },
    { name: "Конструктор", path: "/constructor" },
    // { name: "Подборки", path: "/" },
    // { name: "Материалы", path: "/" },
  ];

  return (
    <header>
      <Container>
        <div className={classes.wrapper}>
          <Link to="/">
            <div className={classes.logo}>
              <img src="/assets/home.png" alt="logo" />
              <h1>Knowledge-check</h1>
            </div>
          </Link>
          <nav className={classes.menu}>
            <ul className={classes.nav}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={classes.buttons}>
            {isAuth ? (
              <Link to="/">
                <Button onClick={() => dispatch(logout())}>
                  <img src="/assets/logout.png" alt="logout" />
                  Выход
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button>
                  <img src="/assets/login1.png" alt="login" />
                  Вход
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
