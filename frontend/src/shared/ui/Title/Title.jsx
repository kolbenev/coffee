import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Title.module.css";

const Title = ({
  className,
  title,
  center = true,
  italic,
  mw = 417,
  children,
}) => {
  return (
    <div
      className={classNames(cls.wrapper, [className], { [cls.center]: center })}
    >
      <h3 className={cls.title}>
        {title}
        {italic && <span className={cls.italic}>{" " + italic}</span>}
      </h3>
      {children && (
        <p className={cls.text} style={{ maxWidth: mw }}>
          {children}
        </p>
      )}
    </div>
  );
};

export default Title;
