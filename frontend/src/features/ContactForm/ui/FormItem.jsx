import React from "react";
import { Field, useField } from "formik";
import { classNames } from "@/shared/lib/classNames/classNames";
import { IMaskInput } from "react-imask";

import cls from "./ContactForm.module.css";

const FormItem = ({ className, options, label, name, mask, ...other }) => {
  const [field, _, helpers] = useField(name);
  const handleChange = (value) => helpers.setValue(value);

  const inputClassName = classNames(cls.input, [], {
    [cls.error]: options?.touched[name] && options?.errors[name],
  });

  return (
    <div
      className={classNames(cls.item, [className], {
        [cls["full-size"]]: name === "comment",
      })}
    >
      <label className={cls.label}>{label}</label>
      {mask ? (
        <IMaskInput
          name={name}
          className={inputClassName}
          value={field.value}
          onAccept={handleChange}
          mask={mask}
          {...field}
          {...other}
        />
      ) : (
        <Field className={inputClassName} name={name} {...other} />
      )}
    </div>
  );
};

export default FormItem;
