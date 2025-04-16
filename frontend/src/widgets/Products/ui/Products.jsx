import React from "react";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import Title from "@/shared/ui/Title/Title";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import Container from "@/shared/ui/Container/Container";
import { ProductsList } from "@/features/ProductsList";

import cls from "./Products.module.css";

const Products = () => {
  return (
    <section className={cls.products}>
      <Container className={cls.inner}>
        <ValueBrackets className={cls.top}>Каталог</ValueBrackets>
        <Title title="КАТАЛОГ" italic="ПРОДУКЦИИ" mw={374}>
          От сортов арабики и робусты до уникальных сортов с особым вкусом — у
          нас вы найдёте именно тот кофе, который соответствует вашим
          предпочтениям.
        </Title>
        <ProductsList />
        <ButtonArrow className={cls.button}>Перейти к каталогу</ButtonArrow>
      </Container>
    </section>
  );
};

export default Products;
