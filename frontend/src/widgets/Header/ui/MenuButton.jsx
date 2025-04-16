import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Header.module.css";

const MenuButton = ({ onClick, activeMenu }) => {
  return (
    <button
      className={classNames(cls.menu_button, [], {
        [cls.active_button]: activeMenu,
      })}
      onClick={onClick}
    >
      <span className={cls.line}></span>
    </button>
  );
};

export default MenuButton;
