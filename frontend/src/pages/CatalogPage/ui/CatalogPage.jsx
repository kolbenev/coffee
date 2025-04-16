import React from "react";
import { ImageWithBadge } from "@/widgets/ImageWithBadge";
import { FlexSection } from "@/widgets/FlexSection";
import { AllProducts } from "@/widgets/AllProducts";

const CatalogPage = () => {
  return (
    <>
      <AllProducts />
      <ImageWithBadge />
      <FlexSection />
    </>
  );
};

export default CatalogPage;
