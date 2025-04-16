import React from "react";
import { iconSocialsConfig } from "../config/iconSocialsConfig";

import cls from "./Footer.module.css";

const Socials = () => {
  return (
    <div className={cls.socials}>
      {iconSocialsConfig.map((item) => (
        <a className={cls.social_link} key={item.alt} href={item.path}>
          <img src={item.img} alt={item.alt} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
