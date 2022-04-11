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
                  className="item__image"
                  src="https://images6.alphacoders.com/488/thumb-1920-488158.jpg"
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
                  <label for="file">Загрузить изображение</label>
                  <input className="input__file" type="file" id="file" />
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

          {/* startTest */}

          {/* <div className="testdone">
            <div className="testdone__inner">
              <img
                className="item__image"
                src="https://images6.alphacoders.com/488/thumb-1920-488158.jpg"
              />
              <div className="testdone__body">
                <div className="testdone__info">
                  <a className="info__user" href="/">
                    <img
                      src="https://yt3.ggpht.com/a/AATXAJz_1rU2Tf3KCJoPZfd7ibjAeyqR9UIHEWB8cQ=s900-c-k-c0xffffffff-no-rj-mo"
                      alt="avatar"
                    />
                    <span>username</span>
                  </a>
                  <a className="info__rating" href="/">
                    <span>123</span>
                  </a>
                  <a className="info__done" href="/">
                    <span>500</span>
                  </a>
                </div>
                <h2 className="testdone__title">
                  <a href="/">
                    Лучший босс игры Лучший босс игры Лучший босс игры
                  </a>
                </h2>
                <div className="testdone__text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
                <div className="testdone__bottom">
                  <div className="testdone__number">
                    <p>10 вопросов</p>
                  </div>
                  <div className="testdone__button">
                    <button className="btn">Поехали!</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* viewtest */}
          {/* <div className="question">
            <div className="question__inner">
              <div className="question__title">
                <h3>Название вопроса?</h3>
              </div>
              <div className="answer__body">
                <h4>Выберите правильный вариант:</h4>
                <div className="answer__item">
                  <label for="answer0">вариант 1</label>
                  <input type="radio" name="answer" id="answer0" value="0" />
                </div>
                <div className="answer__item">
                  <label for="answer1">вариант 1</label>
                  <input type="radio" name="answer" id="answer1" value="1" />
                </div>
                <div className="answer__item">
                  <label for="answer2">вариант 1</label>
                  <input type="radio" name="answer" id="answer2" value="2" />
                </div>
                <div className="answer__item">
                  <label for="answer3">вариант 1</label>
                  <input type="radio" name="answer" id="answer3" value="3" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default App;
