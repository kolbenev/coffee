import React, { useEffect, useRef, useState } from "react";
import Sprite from "@/shared/ui/Sprite/Sprite";
import Input from "@/shared/ui/Input/Input";
import Dropdown from "./Dropdown";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Filter.module.css";

const Filter = () => {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div className={cls.filter} ref={wrapperRef}>
      <Input
        className={classNames(cls.button, [], { [cls.active]: active })}
        onClick={() => setActive((b) => !b)}
        field={false}
        type="button"
        value="Показать фильтры"
      >
        <Sprite icon={"arrow-bottom"} width={9} height={5} />
      </Input>
      <Dropdown active={active} />
    </div>
  );
};

export default Filter;
