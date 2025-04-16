import Container from "@/shared/ui/Container/Container";
import Image from "./Image";
import { ContactForm } from "@/features/ContactForm";

import cls from "./FlexSection.module.css";

const FlexSection = ({ className, children }) => {
  return (
    <section className={className ? className : cls.section} id='contacts'>
      <Container className={cls.inner}>
        {children ? children : <Image />}
        <ContactForm />
      </Container>
    </section>
  );
};

export default FlexSection;
