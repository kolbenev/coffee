import React from "react";
import Input from "@/shared/ui/Input/Input";
import { Form, Formik } from "formik";

import cls from "./Search.module.css";

import search from "../../assets/search.png";

const Search = () => {
  return (
    <Formik>
      <Form>
        <Input className={cls.input} placeholder="Поиск по названию">
          <button className={cls.button}>
            <img src={search} alt="search-button" />
          </button>
        </Input>
      </Form>
    </Formik>
  );
};

export default Search;
