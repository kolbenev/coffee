import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Contacts.module.css";

const Item = ({ name, className, children }) => {
  return (
    <div className={classNames(cls.item, [className])}>
      <span className={cls.item_name}>{name}</span>
      {children}
    </div>
  );
};

export default Item;
