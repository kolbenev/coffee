import React from "react";
import Container from "@/shared/ui/Container/Container";
import Title from "@/shared/ui/Title/Title";
import Calculation from "./Calculation";
import { Marquee } from "@/features/Marquee";
import { TrackForm } from "@/features/TrackForm";
import { PricesTable } from "@/features/PricesTable";

import cls from "./Prices.module.css";

const Prices = () => {
  return (
    <section className={cls.prices}>
      <Marquee />
      <Container>
        <div className={cls.top}>
          <Title title="КАЛЬКУЛЯТОР" italic="ЦЕНЫ" center={false} />
          <h5 className={cls.title}>Бразилия ориентированная цена</h5>
        </div>
        <PricesTable />
        <Calculation />
        <div className={cls.bottom}>
          <h5 className={cls.title}>Отследить свой заказ</h5>
          <TrackForm />
        </div>
      </Container>
    </section>
  );
};

export default Prices;
