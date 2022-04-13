import React, { useState, useEffect } from "react";
import { CardTest } from "../../components/TestItem/CardTest";
import { Loader } from "../../components/UI/Loader";
import { Axios } from "../../axios";

export const ListTests = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get("/tests.json");
      const tests = [];

      Object.entries(data).forEach(([key, value]) => {
        tests.push({
          id: key,
          name: value.name,
          discription: value.discription,
          image: value.image,
        });
      });

      setLoading(false);
      setState(tests);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="tests__list">
          {state.map((test, index) => (
            <CardTest key={test.id + index} test={test} />
          ))}
        </div>
      )}
    </>
  );
};
