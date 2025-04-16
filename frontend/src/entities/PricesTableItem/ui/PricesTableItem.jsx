import React from "react";

const PricesTableItem = ({ className, th = false, data, name }) => {
  return (
    <>
      {data.map((item, index) =>
        th ? (
          <th className={className} key={index}>
            {item[name] || '—'}
            {name == "price" && " $"}
          </th>
        ) : (
          <td className={className} key={index}>
            {item[name] || '—'}
            {item[name] && name == "price" && " $"}
          </td>
        )
      )}
    </>
  );
};

export default PricesTableItem;
