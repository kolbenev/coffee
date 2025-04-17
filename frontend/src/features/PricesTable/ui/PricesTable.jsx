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
      wrapperClassName={cls.main_wrapper}
    >
      <table className={cls.table}>
        <thead>
          <tr className={cls.tr}>
            <th className={cls.th}>
              <span>Месяц контракта</span>
              <span className={cls.mobile_key}>Мес</span>
            </th>
            <PricesTableItem
              className={cls.th}
              data={prices}
              th={true}
              name={"month"}
            />
          </tr>
        </thead>
        <tbody>
          <tr className={cls.tr}>
            <td className={cls.td}>
              <span>
                DDP Питер-Москва <br /> цена с учетом НДС кг/$
              </span>
              <span className={cls.mobile_key}>DDP с НДС кг/$</span>
            </td>
            <PricesTableItem className={cls.td} data={prices} name={"price"} />
          </tr>
          <tr className={cls.tr}>
            <td className={cls.td}>
              <span>Дата прихода груза</span>
              <span className={cls.mobile_key}>Приход</span>
            </td>
            <PricesTableItem
              className={cls.td}
              data={prices}
              name={"delivery_month"}
            />
          </tr>
          <tr className={cls.tr}>
            <td className={cls.td}>
              <span>
                {" "}
                Последний день <br />
                фиксации кофе
              </span>
              <span className={cls.mobile_key}>Фиксация</span>
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
