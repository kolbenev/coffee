import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./ValueBrackets.module.css";

const ValueBrackets = ({ className, forSectionTop, children }) => {
  return (
    <span
      className={classNames(cls.value, [className], {[cls.section_top]:forSectionTop})}
    >{`{ ${children} }`}</span>
  );
};

export default ValueBrackets;
