import React from "react";
import { Link } from "react-router-dom";

import cls from "./Footer.module.css";

const NavigationBox = ({ name, num, links, children }) => {
  return (
    <div className={cls.block}>
      <div className={cls.name}>
        {name}
        <span className={cls.name_num}>
          <span>{"{"}</span>
          {num}
          <span>{"}"}</span>
        </span>
      </div>
      <div className={cls.items}>
        {links.map(({ path, value }) => {
          return (
            <Link className={cls.item} key={path} to={path}>
              {value}
            </Link>
          );
        })}
        {children}
      </div>
    </div>
  );
};

export default NavigationBox;
