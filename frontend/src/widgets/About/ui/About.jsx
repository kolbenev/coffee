import React from "react";
import Title from "@/shared/ui/Title/Title";
import Box from "./Box";
import Container from "@/shared/ui/Container/Container";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import { classNames } from "@/shared/lib/classNames/classNames";

import image_1 from "../assets/image-1.png";
import image_2 from "../assets/image-2.png";

import cls from "./About.module.css";

const About = () => {
  return (
    <section className={cls.about}>
      <Container>
        <ValueBrackets  forSectionTop={true}>О компании</ValueBrackets>
        <Title
          title={"Оптовые поставки Зеленого кофе"}
          italic="высшего качества"
        >
          Мы — ведущий поставщик и дистрибьютор кофе, предлагающий лучшие сорта
          зерен со всего мира. Наша компания занимается импортом и экспортом
          кофе, обеспечивая наших клиентов качественной продукцией по
          конкурентоспособным ценам.
        </Title>
        <div className={cls.content}>
          <img
            className={classNames(cls.img, [cls.first])}
            src={image_1}
            alt="image"
          />
          <img
            className={classNames(cls.img, [cls.second])}
            src={image_2}
            alt="image"
          />
          <Box />
        </div>
      </Container>
    </section>
  );
};

export default About;
