import React from "react";

export const PreviewTest = () => {
  return (
    <div className="testdone">
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
            <a href="/">Лучший босс игры Лучший босс игры Лучший босс игры</a>
          </h2>
          <div className="testdone__text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
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
    </div>
  );
};
