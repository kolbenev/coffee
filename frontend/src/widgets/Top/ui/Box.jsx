import React from "react";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Top.module.css";

const Box = ({ className, to, children }) => {
  return (
    <div className={classNames(cls.box, [className])}>
      {children}
      <ButtonArrow className={cls.button_arrow} to={to}/>
    </div>
  );
};

export default Box;
