import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import Title from "@/shared/ui/Title/Title";
import Container from "@/shared/ui/Container/Container";
import ValueBrackets from "@/shared/ui/ValueBrackets/ValueBrackets";
import { NewsList } from "@/features/NewsList";

import cls from "./News.module.css";

const News = ({ className, brackets = true }) => {
  return (
    <section className={className ? className : cls.news}>
      <Container>
        {brackets && (
          <ValueBrackets forSectionTop={true}> Новости</ValueBrackets>
        )}
        <div className={cls.top}>
          <Title title="НОВОСТИ И АКЦИИ" />
          <ValueBrackets>Сортировать</ValueBrackets>
        </div>

        <NewsList />
        <ButtonArrow className={cls.button} to="/news">
          Показать больше
        </ButtonArrow>
      </Container>
    </section>
  );
};

export default News;
