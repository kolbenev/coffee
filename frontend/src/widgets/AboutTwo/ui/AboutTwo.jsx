import React from "react";
import Container from "@/shared/ui/Container/Container";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import Descr from "./Descr";
import { Link } from "react-router-dom";

import cls from "./AboutTwo.module.css";

import image_1 from "../assets/image-1.png";
import image_2 from "../assets/image-2.png";
import image_3 from "../assets/image-3.png";

const AboutTwo = () => {
  return (
    <section className={cls.about}>
      <Container className={cls.inner}>
        <ValueBrackets>О компании</ValueBrackets>
        <Descr />
        <div className={cls.wrapper}>
          <div className={cls.images}>
            <img className={cls.images_item} src={image_2} alt="image" />
            <img className={cls.images_item} src={image_3} alt="image" />
          </div>
          <Link className={cls.link}>
            <ValueBrackets>Перейти к каталогу</ValueBrackets>
          </Link>
        </div>
        <img className={cls.img} src={image_1} alt="image" />
      </Container>
    </section>
  );
};

export default AboutTwo;
