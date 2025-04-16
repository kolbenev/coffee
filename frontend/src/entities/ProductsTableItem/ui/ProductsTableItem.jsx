import React from "react";
import Td from "./Td";

import cls from "./ProductsTableItem.module.css";

const ProductsTableItem = ({
  name,
  screen,
  grade,
  in_stock,
  descriptor,
  price,
}) => {
  return (
    <tr className={cls.item}>
      <td className={cls.td}>{name}</td>
      <td className={cls.td}>
        {in_stock ? (
          <div className={cls.availability}> В наличии на всех складах</div>
        ) : (
          <div className={cls.none}> В наличии нет</div>
        )}
      </td>

      <Td point={"Скрин"} value={screen} />
      <Td point={"Оценка"} value={grade} />
      <Td point={"Обработка"} />
      <Td point={"Дескриптор"} value={descriptor} />
      <Td point={"Цена"} value={price + " $"} />
    </tr>
  );
};

export default ProductsTableItem;
