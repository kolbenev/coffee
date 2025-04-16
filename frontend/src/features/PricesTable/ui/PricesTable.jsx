import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { PricesTableItem } from "@/entities/PricesTableItem";
import { useGetPrices } from "../lib/hooks/useGetPrices";

import "react-horizontal-scrolling-menu/dist/styles.css";
import cls from "./PricesTable.module.css";

const PricesTable = () => {
  const prices = useGetPrices();

  return (
    <ScrollMenu
      itemClassName={cls.scroll_item}
      scrollContainerClassName={cls.scroll_wrapper}
    >
      <table className={cls.table}>
        <thead>
          <tr>
            <th className={cls.th}>Месяц контракта</th>
            <PricesTableItem
              className={cls.th}
              data={prices}
              th={true}
              name={"month"}
            />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cls.td}>
              DDP Питер-Москва <br /> цена с учетом НДС кг/$
            </td>
            <PricesTableItem className={cls.td} data={prices} name={"price"} />
          </tr>
          <tr>
            <td className={cls.td}>Дата прихода груза</td>
            <PricesTableItem
              className={cls.td}
              data={prices}
              name={"delivery_month"}
            />
          </tr>
          <tr>
            <td className={cls.td}>
              Последний день <br />
              фиксации кофе
            </td>
            <PricesTableItem
              className={cls.td}
              data={prices}
              name={"last_day_fixation"}
            />
          </tr>
        </tbody>
      </table>
    </ScrollMenu>
  );
};

export default PricesTable;
