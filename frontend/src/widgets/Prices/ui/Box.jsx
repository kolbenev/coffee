import React from "react";
import Sprite from "@/shared/ui/Sprite/Sprite";
import { Link } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Prices.module.css";

const Box = ({ title, className, to, children }) => {
  const titleComponent = <h5 className={cls.box_title}>{title}</h5>;
  return (
    <div className={classNames(cls.box, [className])}>
      {to ? (
        <div className={cls.box_top}>
          {titleComponent}
          <Link className={cls.box_link}>
            <Sprite icon="arrow-right" width={16} height={13} />
          </Link>
        </div>
      ) : (
        titleComponent
      )}
      {children}
    </div>
  );
};

export default Box;
