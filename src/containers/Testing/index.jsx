import React, { useState } from "react";
import { FinishedTest } from "../../components/TestItem/FinishedTest";
import { Loader } from "../../components/UI/Loader";
import { ActiveTestItem } from "../ActiveTestItem";

export const Testing = (props) => {
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="question">
      <div className="question__inner">
        {loading ? (
          <Loader />
        ) : isFinished ? (
          <FinishedTest />
        ) : (
          <ActiveTestItem />
        )}
      </div>
    </div>
  );
};
