import React from "react";
import { Products } from "@/widgets/Products";
import { FlexSection } from "@/widgets/FlexSection";
import { AboutPageTop } from "@/widgets/AboutPageTop";
import { AboutTwo } from "@/widgets/AboutTwo";

const AboutPage = () => {
  return (
    <>
      <AboutPageTop />
      <AboutTwo />
      <Products />
      <FlexSection />
    </>
  );
};

export default AboutPage;
