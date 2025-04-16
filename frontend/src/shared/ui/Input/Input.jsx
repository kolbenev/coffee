import { Field } from "formik";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Input.module.css";

const Input = ({
  className,
  field = true,
  error = false,
  children,
  ...other
}) => {
  
  const classNamesString = classNames(cls.input, [className], {
    [cls.error]: error,
  });

  const input = field ? (
    <Field className={classNamesString} {...other} />
  ) : (
    <input className={classNamesString} {...other} />
  );
  return (
    <>
      {children ? (
        <div className={cls.wrapper}>
          {input}
          <div className={cls.right}>{children}</div>
        </div>
      ) : (
        input
      )}
    </>
  );
};

export default Input;
