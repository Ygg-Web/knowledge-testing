import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components/UI";
import { logout } from "../../redux/actions/auth";
import { Container } from "../../hoc/Container";
import classes from "./Header.module.scss";

export const Header = () => {
  const isAuth = useSelector(({ auth }) => !!auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  const navLinks = [
    { name: "Главная", path: "/", default: "active" },
    { name: "Конструктор", path: "/constructor" },
    // { name: "Подборки", path: "/" },
    // { name: "Материалы", path: "/" },
  ];

  isAuth && navLinks.push({ name: "Личный кабинет", path: "/profile/" });

  return (
    <header>
      <Container>
        <div className={classes.wrapper}>
          <Link to="/">
            <div className={classes.logo}>
              <img src="/assets/home.png" alt="logo" />
              <h1>Game test</h1>
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
              <Button onClick={logOut}>
                <img src="/assets/logout.png" alt="logout" />
                Выход
              </Button>
            ) : (
              <Link to="/login">
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
