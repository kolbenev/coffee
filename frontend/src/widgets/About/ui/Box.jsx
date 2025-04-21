import React from "react";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";

import cls from "./About.module.css";

const Box = () => {
  return (
    <div className={cls.box}>
      <p className={cls.text}>
        <span>Узнайте</span> подробнее <span>о нашей истории</span>
      </p>
      <ButtonArrow className={cls.arrow} to="/contacts" />
    </div>
  );
};

export default Box;
