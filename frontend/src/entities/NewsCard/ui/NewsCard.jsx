import React from "react";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import { Link } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./NewsCard.module.css";

const NewsCard = ({ className, date, photo, text }) => {
  return (
    <li className={classNames(cls.card, [className])}>
      <div className={cls.left}>
        <span className={cls.soon}>Скоро</span>
        <span className={cls.date}>{date}</span>
      </div>
      <div className={cls.descr}>
        <p className={cls.descr_text}>{text}</p>
        <Link className={cls.link} to={"#"}>
          <ValueBrackets>ПОДРОБНЕЕ </ValueBrackets>
        </Link>
      </div>
      <div className={cls.right}>
        <img className={cls.img} src={photo} alt="image" />
      </div>
      <span className={classNames(cls.date, [cls.date_bottom])}>{date}</span>
    </li>
  );
};

export default NewsCard;
