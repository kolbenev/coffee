import React from "react";
import Title from "@/shared/ui/Title/Title";
import Telephone from "@/shared/ui/Telephone/Telephone";
import Item from "./Item";
import { contacts } from "@/shared/constants/contacts";

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
            <a className={cls.value} href={contacts.telegram}>
              Telegram
            </a>
            <a className={cls.value} href={contacts.whatsApp}>
              WhatsApp
            </a>
          </div>
        </Item>
        <Item name="Связаться с нами">
          <div className={cls.flex}>
            <p className={cls.value}>
              {contacts.address}
            </p>
          </div>
        </Item>
        <Item name={"Телефон"} className={cls.telephone}>
          <Telephone className={cls.value_b} />
        </Item>
        <Item name={"Email"} className={cls.mail}>
          <a className={cls.value_b} href={contacts.mail.href}>{contacts.mail.value}</a>
        </Item>
      </div>
    </div>
  );
};

export default Contacts;
