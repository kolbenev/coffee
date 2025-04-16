import React from "react";
import { FlexSection } from "@/widgets/FlexSection";
import { Contacts } from "@/entities/Contacts";
import { ImageWithBadge } from "@/widgets/ImageWithBadge";


import cls from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <>
      <FlexSection className={cls.section}>
        <Contacts />
      </FlexSection>
      <ImageWithBadge />
    </>
  );
};

export default ContactsPage;
