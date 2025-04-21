import React from "react";
import Box from "./Box";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import { DiffForm } from "@/features/DiffForm";

import cls from "./Prices.module.css";

const Calculation = () => {
  return (
    <div className={cls.calculation}>
      <Box
        className={cls.black}
        title={"Рассчитайте стоимость с помощью калькулятора"}
        to={"#"}
      >
        <DiffForm />
      </Box>
      <Box
        className={cls.blue}
        title={"Закажите персональный расчет стоимости"}
      >
        <div className={cls.wrapper}>
          <p className={cls.text}>
            Оставьте заявку, чтобы мы могли связаться с вами и предоставить
            личный расчет стоимости кофе
          </p>
          <ButtonArrow className={cls.button_arrow} white={true}  href='#contacts' />
        </div>
      </Box>
    </div>
  );
};

export default Calculation;
