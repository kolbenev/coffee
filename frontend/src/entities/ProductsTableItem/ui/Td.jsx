import React from "react";

import cls from "./ProductsTableItem.module.css";

const Td = ({ value, point }) => {
  return (
    <td className={cls.td}>
      <span className={cls.point}>{point}: </span>
      {value ? value : "—"}
    </td>
  );
};

export default Td;
