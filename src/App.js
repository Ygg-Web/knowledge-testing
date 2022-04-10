function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header__inner">
            <a href="/" className="header__logo">
              <img src="/assets/logo.png" alt="logo" />
              <h1>Knowledge-check</h1>
            </a>
            <nav className="header__menu">
              <ul className="menu">
                <li className="active">Главная</li>
                <li>Конструктор</li>
                <li>Подборки</li>
                <li>Материалы</li>
              </ul>
            </nav>
            <div className="header__login">
              <a className="login" href="/">
                <img src="/assets/login.png" alt="login" />
                Вход
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          {/* ListItem */}
          {/* <div className="tests__list">
            <div className="test__item">
              <div className="item__inner">
                <img
                  src="https://images6.alphacoders.com/488/thumb-1920-488158.jpg"
                  className="item__image"
                />
                <div className="item__body">
                  <h2 className="item__title">
                    <a href="/">
                      Лучший босс игры Лучший босс игры Лучший босс игры
                    </a>
                  </h2>
                  <div className="item__text">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s
                    </p>
                  </div>
                </div>
                <div className="item__bottom">
                  <div className="item__rating">
                    <i>9</i>
                  </div>
                  <div className="item__limit">
                    <i>10</i>
                  </div>
                  <a className="item__profile" href="/">
                    <i>username</i>
                    <img
                      src="https://yt3.ggpht.com/a/AATXAJz_1rU2Tf3KCJoPZfd7ibjAeyqR9UIHEWB8cQ=s900-c-k-c0xffffffff-no-rj-mo"
                      alt="avatar"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* createTest */}
          <div className="constructor">
            <div className="constructor__inner">
              <h1>Конструктор теста</h1>
              <form className="constructor__form">
                <div className="constructor__input">
                  <label>введите вопрос</label>
                  <input className="control__input" type="text" />
                </div>
                <div className="constructor__input">
                  <label>введите первый вариант</label>
                  <input className="control__input" type="text" />
                </div>
                <div className="constructor__input">
                  <label>введите второй вариант</label>
                  <input className="control__input" type="text" />
                </div>
                <div className="constructor__input">
                  <label>введите третий вариант</label>
                  <input className="control__input" type="text" />
                </div>
                <div className="constructor__input">
                  <label>введите четвертый вариант</label>
                  <input className="control__input" type="text" />
                </div>
                <div className="constructor__select">
                  <label>Выберите правильный ответ</label>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

                <div className="constructor__image">
                  <label>загрузить изображение</label>
                  <input className="input__file" type="file" />
                </div>

                <button className="constructor__btn-add btn">
                  Добавить вопрос
                </button>
                <button className="constructor__btn-creat btn">
                  Создать тест
                </button>
              </form>
            </div>
          </div>

          {/* authorization */}
          {/* 
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
          </div> */}
        </div>
      </main>
    </>
  );
}

export default App;
