import React from "react";
import { ProductsCard } from "@/entities/ProductsCard";
import { useGetProducts } from "@/entities/storeProducts";

import cls from "./ProductsList.module.css";

const ProductsList = () => {
  const products = useGetProducts();
  
  return (
    <ul className={cls.list}>
      {products.slice(0, 3).map((item, index) => (
        <ProductsCard key={item.id} num={index + 1} {...item}>
          {item.short_description}
        </ProductsCard>
      ))}
    </ul>
  );
};

export default ProductsList;
