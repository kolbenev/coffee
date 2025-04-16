import React, { useState } from "react";
import FormItem from "./FormItem";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import Answer from "@/shared/ui/Answer/ui/Answer";
import { Form, Formik } from "formik";
import { useMyForm } from "../lib/hooks/useMyForm";
import { itemsConfig } from "../config/itemsConfig";

import cls from "./ContactForm.module.css";

const MyForm = () => {
  const [answer, setAnswer] = useState({});
  const { initialValues, schema, sendData } = useMyForm(setAnswer);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={sendData}
    >
      {(options) => (
        <Form className={cls.form}>
          <div className={cls.items}>
            {itemsConfig.map((item) => (
              <FormItem key={item.name} {...item} options={options} />
            ))}
          </div>
          <Answer answer={answer} setAnswer={setAnswer} />
  
          <ButtonArrow className={cls.button} type="submit">
            Отправить
          </ButtonArrow>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
