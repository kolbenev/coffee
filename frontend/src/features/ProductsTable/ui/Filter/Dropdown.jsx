import React, { useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { filterConfig } from "../../config/filterConfig";

import cls from "./Filter.module.css";

const Dropdown = ({ active }) => {
  const [filterItems, setFilterItems] = useState(filterConfig);

  const handleClick = (mainIndex, index) => {
    setFilterItems((items) => {
      const item = items[mainIndex].items[index];
      item.active = !item.active;
      return [...items];
    });
  };
  return (
    <div
      className={classNames(cls.dropdown, [], {
        [cls.active]: active,
      })}
    >
      {filterItems.map(({ name, items }, mainIndex) => (
        <div className={cls.group} key={name}>
          <p className={cls.group_name}>{name}</p>
          <div className={cls.filter_buttons}>
            {items.map(({ name, active }, index) => (
              <button
                className={classNames(cls.filter_button, [], {
                  [cls.active]: active,
                })}
                onClick={() => handleClick(mainIndex, index)}
                key={name}
              >
                <span></span>
                {name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
