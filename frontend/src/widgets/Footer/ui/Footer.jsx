import React from "react";
import Logo from "@/shared/ui/Logo/Logo";
import Navigation from "./Navigation";
import Bottom from "./Bottom";
import Container from "@/shared/ui/Container/Container";

import cls from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <Container className={cls.inner}>
        <div className={cls.content}>
          <div className={cls.left}>
            <Logo className={cls.logo} />
            <p className={cls.text}>
              © Размещенная на сайте информация не является публичной офертой и
              носит информационный характер. Авторские права на размещенные
              материалы принадлежат ООО «КОФЕКСИМ», использование которых
              третьими лицами допускается только с письменного согласия
              правообладателя.
            </p>
          </div>
          <Navigation />
        </div>
        <Bottom />
      </Container>
    </footer>
  );
};

export default Footer;
