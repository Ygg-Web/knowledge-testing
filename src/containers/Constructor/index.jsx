import React from "react";

export const Constructor = () => {
  return (
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

          <button className="constructor__btn-add btn">Добавить вопрос</button>
          <button className="constructor__btn-creat btn">Создать тест</button>
        </form>
      </div>
    </div>
  );
};
