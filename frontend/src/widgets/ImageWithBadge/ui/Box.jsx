import React from "react";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import Sprite from "@/shared/ui/Sprite/Sprite";
import coffee from "../assets/coffee.png";
import { Link } from "react-router-dom";

import cls from "./ImageWithBadge.module.css";


const Box = () => {
  return (
    <div className={cls.box}>
      <div className={cls.wrapper}>
        <ValueBrackets>Стоимость</ValueBrackets>
        <p className={cls.text}>
          Рассчитайте стоимость кофе по актуальным ценам с помощью нашего
          калькулятора
        </p>
        <ButtonArrow className={cls.button} to="#" black={true}>
          Посмотреть цены
        </ButtonArrow>
      </div>
      <Link className={cls.link} to={""}>
        <Sprite width={11} height={11} icon={"arrow-right"} />
      </Link>
      <img className={cls.img} src={coffee} alt="coffee" />
    </div>
  );
};

export default Box;
