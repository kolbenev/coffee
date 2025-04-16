import React from "react";
import { Link } from "react-router-dom";

import cls from "./Footer.module.css";

const Bottom = () => {
  return (
    <div className={cls.bottom}>
      <Link className={cls.bottom_link}>Политика конфиденциальности</Link>
      <span className={cls.llc}>ООО «КОФЕКСИМ» | «COFEXIM» LLC </span>
      <span className={cls.copyright}>&copy;2025</span>
    </div>
  );
};

export default Bottom;
