import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useField } from "formik";
import { IMaskInput } from "react-imask";

import cls from "./NumberInput.module.css";

const NumberInput = ({ className, name, error, ...other }) => {
  const [field, _, helpers] = useField(name);

  const handleChange = (value) => helpers.setValue(value);

  return (
    <IMaskInput
      className={classNames(cls.input, [className], { [cls.error]: error })}
      onAccept={handleChange}
      mask={Number}
      name={name}
      {...field}
      {...other}
    />
  );
};

export default NumberInput;
