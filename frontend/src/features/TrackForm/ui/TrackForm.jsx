import React from "react";
import ButtonArrow from "@/shared/ui/ButtonArrow/ButtonArrow";
import NumberInput from "@/shared/ui/NumberInput/NumberInput";
import { Form, Formik } from "formik";

import cls from "./TrackForm.module.css";

const TrackForm = () => {
  return (
    <Formik>
      <Form className={cls.track}>
        <NumberInput type="text" name='track' placeholder="Введите трек номер" />
        <ButtonArrow className={cls.button}>Проверить</ButtonArrow>
      </Form>
    </Formik>
  );
};

export default TrackForm;
