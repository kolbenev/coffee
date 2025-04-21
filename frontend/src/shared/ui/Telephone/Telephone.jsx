import React from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { contacts } from "@/shared/constants/contacts";


import cls from "./Telephone.module.css";

const Telephone = ({ className }) => {
  return (
    <a
      className={classNames(cls.telephone, [className])}
      href={contacts.telephone.href}
    >
      {contacts.telephone.value}
    </a>
  );
};

export default Telephone;
