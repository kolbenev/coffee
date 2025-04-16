import React, { useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Answer.module.css";

const Answer = ({ answer, setAnswer }) => {
  const successfulStatus = answer.status >= 200 && answer.status < 300;

  useEffect(() => {
    if (answer.get) {
      setTimeout(() => {
        setAnswer({});
      }, 5000);
    }
  }, [answer]);
  return (
    <>
      {answer.get && (
        <div
          className={classNames(cls.answer, [], {
            [cls.successful]: successfulStatus,
            [cls.error]: !successfulStatus,
          })}
        >
          {successfulStatus
            ? "Ваш запрос успешно выполнился"
            : "Что-то пошло не так. Попробуйте позже"}
        </div>
      )}
    </>
  );
};

export default Answer;
