import React, { useState } from "react";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import NumberInput from "@/shared/ui/NumberInput/NumberInput";
import { useDiffForm } from "../lib/hooks/useDiffForm";
import Answer from "@/shared/ui/Answer/ui/Answer";
import { Form, Formik } from "formik";

import cls from "./DiffForm.module.css";

const DiffForm = () => {
  const [answer, setAnswer] = useState({});
  const { schema, initialValues, sendData } = useDiffForm(setAnswer);
  return (
    <div className={cls.diff}>
      <p className={cls.title}>Введите диф</p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={sendData}
      >
        {({ errors, touched }) => (
          <Form className={cls.form}>
            <NumberInput
              type="text"
              name="diff"
              error={errors.diff && touched.diff}
              placeholder="Ваше значение"
            />
            <Answer answer={answer} setAnswer={setAnswer} />
            <ButtonArrow className={cls.button} type="submit">
              Рассчитать стоимость
            </ButtonArrow>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DiffForm;
