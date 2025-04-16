import React from "react";
import NavigationBox from "./NavigationBox";
import Socials from "./Socials";
import Telephone from "@/shared/ui/Telephone/Telephone";
import { pageLinksConfig } from "../config/pageLinksConfig";
import { socialsConfig } from "../config/socialsConfig";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Footer.module.css";

const Navigation = () => {
  return (
    <nav className={cls.navigation}>
      <Socials />
      <NavigationBox name={"Меню"} num={"1"} links={pageLinksConfig} />
      <NavigationBox name={"Контакты"} num={"2"} links={socialsConfig}>
        <p className={classNames(cls.item, [cls.address])}>
          Москва, ул. Чертановская, д.1В, корп. 1, кв. 238
        </p>
        <Telephone className={cls.telephone} />
      </NavigationBox>
      <Telephone className={cls.telephone_mobile} />
    </nav>
  );
};

export default Navigation;
