import React from "react";
import { Link } from "react-router-dom";

export const ListTests = () => {
  return (
    <div className="tests__list">
      <div className="test__item">
        <div className="item__inner">
          <Link to="/test/:id">
            <img
              className="item__image"
              src="https://images6.alphacoders.com/488/thumb-1920-488158.jpg"
            />
          </Link>
          <div className="item__body">
            <Link to="/test/:id">
              <h2 className="item__title">
                Лучший босс игры Лучший босс игры Лучший босс игры
              </h2>
            </Link>
            <div className="item__text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s
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
            <Link to="/">
              <div className="item__profile">
                <i>username</i>
                <img
                  src="https://yt3.ggpht.com/a/AATXAJz_1rU2Tf3KCJoPZfd7ibjAeyqR9UIHEWB8cQ=s900-c-k-c0xffffffff-no-rj-mo"
                  alt="avatar"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
