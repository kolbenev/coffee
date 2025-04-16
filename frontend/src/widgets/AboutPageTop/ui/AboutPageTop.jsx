import Container from "@/shared/ui/Container/Container";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";

import cls from "./AboutPageTop.module.css";

import image_1 from "../assets/image-1.png";
import image_2 from "../assets/image-2.png";

const AboutTop = () => {
  return (
    <section className={cls.top}>
      <Container>
        <div className={cls.wrapper}>
          <h1 className={cls.title}>
            <span>COFEXIM</span> - ваш надежный партнер в сфере импорта и
            экспорта кофе
          </h1>
          <ValueBrackets className={cls.brackets}>Наша история</ValueBrackets>
        </div>
        <picture>
          <source srcSet={image_2} media="(max-width:480px)" />
          <img className={cls.img} src={image_1} alt="image" />
        </picture>
      </Container>
    </section>
  );
};

export default AboutTop;
