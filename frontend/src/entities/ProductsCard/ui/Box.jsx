import React from "react";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";

import cls from "./ProductsCard.module.css";

const Box = ({ num, location,photo }) => {
  return (
    <div className={cls.box}>
      <img className={cls.img} src={photo} alt="product" />
      <ValueBrackets className={cls.num}>{num}</ValueBrackets>
      <span className={cls.location}>{location}</span>
      <ButtonArrow className={cls.button} to="#" />
    </div>
  );
};

export default Box;
