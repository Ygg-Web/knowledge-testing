import React, { useState } from "react";
import { CartTest } from "../../components/TestItem/CartTest";
import { Loader } from "../../components/UI/Loader";

const initialState = {
  tests: [
    {
      id: 1,
      nameTest: "История",
      question: "В каком году родился Вася?",
      answers: {
        0: { id: 1, text: "1992" },
        1: { id: 1, text: "1982" },
        2: { id: 1, text: "1892" },
        3: { id: 1, text: "1899" },
      },
      image: "https://images6.alphacoders.com/488/thumb-1920-488158.jpg",
      discription: "Этот тест для очень заботливых .....",
      rating: 123,
      viewed: 12,
      author: {
        username: "pop",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJz_1rU2Tf3KCJoPZfd7ibjAeyqR9UIHEWB8cQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
      rightAnswerId: 1,
    },

    {
      id: 2,
      nameTest: "Война",
      question: "В каком году была ВОВ?",
      answers: {
        0: { id: 1, text: "1939" },
        1: { id: 1, text: "1940" },
        2: { id: 1, text: "1941" },
        3: { id: 1, text: "1942" },
      },
      image: "https://images6.alphacoders.com/488/thumb-1920-488158.jpg",
      discription: "Этот тест для очень заботливых .....",
      rating: 123,
      viewed: 12,
      author: {
        username: "jone",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJz_1rU2Tf3KCJoPZfd7ibjAeyqR9UIHEWB8cQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
      rightAnswerId: 2,
    },

    {
      id: 3,
      nameTest: "Времена года",
      question: "Когда идет снег?",
      answers: {
        0: { id: 1, text: "Зимой" },
        1: { id: 1, text: "Весной" },
        2: { id: 1, text: "Осенью" },
        3: { id: 1, text: "Летом" },
      },
      image: "https://images6.alphacoders.com/488/thumb-1920-488158.jpg",
      discription: "Этот тест для очень заботливых .....",
      rating: 123,
      viewed: 12,
      author: {
        username: "dodo",
        avatar:
          "https://yt3.ggpht.com/a/AATXAJz_1rU2Tf3KCJoPZfd7ibjAeyqR9UIHEWB8cQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
      rightAnswerId: 3,
    },
  ],
  loading: false,
};

export const ListTests = () => {
  const [state, setState] = useState(initialState);
  const { tests } = state;

  return (
    <>
      {state.loading ? (
        <Loader />
      ) : (
        <div className="tests__list">
          {tests.map((test, index) => (
            <CartTest key={test.id + index} test={test} />
          ))}
        </div>
      )}
    </>
  );
};
