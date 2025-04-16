import React from "react";
import Title from "@/shared/ui/Title/Title";
import Telephone from "@/shared/ui/Telephone/Telephone";
import Item from "./Item";

import cls from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={cls.contacts}>
      <Title  center={false} mw={337} title="КОНТАКТНЫЕ" italic="ДАННЫЕ">
        Связаться с нами легко! Если у вас есть вопросы по импорту или экспорту
        кофе, или вы хотите сделать заказ, просто напишите нам.
      </Title>
      <div className={cls.items}>
        <Item name="Связаться с нами">
          <div className={cls.flex}>
            <a className={cls.value} href="#">
              Telegram
            </a>
            <a className={cls.value} href="#">
              WhatsApp
            </a>
          </div>
        </Item>
        <Item name="Связаться с нами">
          <div className={cls.flex}>
            <p className={cls.value}>
              Москва, ул. Чертановская, д.1В, корп. 1, кв. 238
            </p>
          </div>
        </Item>
        <Item name={"Телефон"} className={cls.telephone}>
          <Telephone className={cls.value_b} />
        </Item>
        <Item name={"Email"} className={cls.mail}>
          <a className={cls.value_b} href="mailto:support@cofexim.com">support@cofexim.com</a>
        </Item>
      </div>
    </div>
  );
};

export default Contacts;
