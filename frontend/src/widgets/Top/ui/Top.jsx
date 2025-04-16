import Navigation from "./Navigation";
import Container from "@/shared/ui/Container/Container";

import cls from "./Top.module.css";

const Top = () => {
  return (
    <section className={cls.top}>
      <Container className={cls.inner}>
        <h1 className={cls.title}>
          <span>COFEXIM</span> - ваш надёжный партнёр в мире кофе
        </h1>
      </Container>
      <div className={cls.wrapper}>
        <p className={cls.text}>
          <span>
            Наша основная задача — всемерное содействие формированию кофейной
            культуры и росту
          </span>
          <span className={cls.mobile_text}>
            Наша основная задача — формирование кофейной культуры и рост
          </span>
          качества напитка в нашей стране и за ее пределами.
        </p>
        <Navigation />
      </div>
    </section>
  );
};

export default Top;
