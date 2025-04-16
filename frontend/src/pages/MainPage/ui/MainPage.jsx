import React from "react";
import { Top } from "@/widgets/Top";
import { About } from "@/widgets/About";
import { Products } from "@/widgets/Products";
import { ImageWithBadge } from "@/widgets/ImageWithBadge";
import { News } from "@/widgets/News";
import { FlexSection } from "@/widgets/FlexSection";

const MainPage = () => {
  return (
    <>
      <Top />
      <About />
      <Products />
      <ImageWithBadge />
      <News />
      <FlexSection />
    </>
  );
};

export default MainPage;
