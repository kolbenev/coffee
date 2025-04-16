import React from "react";
import { socialsConfig } from "../config/socialsConfig";

import cls from "./Header.module.css";

const Socials = () => {
  return (
    <div className={cls.socials}>
      {socialsConfig.map((item) => (
        <a className={cls.social_link} key={item.alt} href={item.path}>
          <img src={item.img} alt={item.alt} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
