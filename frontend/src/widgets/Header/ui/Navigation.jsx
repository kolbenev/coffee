import React from "react";
import { Link } from "react-router-dom";
import { navigationConfig } from "../config/navigationConfig";

import cls from "./Header.module.css";

const Navigation = () => {
  return (
    <nav className={cls.navigation}>
      {navigationConfig.map(({ value, path }) => (
        <Link className={cls.link} key={path} to={path}>
          {value}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
