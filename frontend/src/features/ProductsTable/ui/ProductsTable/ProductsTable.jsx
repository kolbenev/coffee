import React from "react";
import { ProductsTableItem } from "@/entities/ProductsTableItem";
import { useGetProducts } from "@/entities/storeProducts";

import cls from "./ProductsTable.module.css";

const ProductsTable = () => {
  const products = useGetProducts();
  
  return (
    <table className={cls.table}>
      <thead>
        <tr>
          <th className={cls.th}>Наименование</th>
          <th className={cls.th}>Наличие </th>
          <th className={cls.th}>Скрин</th>
          <th className={cls.th}>Оценка</th>
          <th className={cls.th}>Обработка</th>
          <th className={cls.th}>Дескриптор</th>
          <th className={cls.th}>Цена</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <ProductsTableItem key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
