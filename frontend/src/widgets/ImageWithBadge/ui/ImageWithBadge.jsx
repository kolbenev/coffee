import React from "react";
import Box from "./Box";
import Container from "@/shared/ui/Container/Container";

import cls from "./ImageWithBadge.module.css";

const ImageWithBadge = () => {
  return (
    <section className={cls.section}>
      <Container className={cls.inner}>
        <Box />
      </Container>
    </section>
  );
}


export default ImageWithBadge;
