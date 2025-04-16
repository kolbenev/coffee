import { classNames } from "@/shared/lib/classNames/classNames";
import MyForm from "./MyForm";
import Sprite from "@/shared/ui/Sprite/Sprite";

import cls from "./ContactForm.module.css";

const ContactForm = ({ className }) => {
  return (
    <div className={classNames(cls.block, [className], {})}>
      <h5 className={cls.title}>Заявка на обратный звонок</h5>
      <button className={cls.top_arrow}>
        <Sprite icon="arrow-right" width={"16px"} height={"13px"} />
      </button>
      <MyForm />
    </div>
  );
};

export default ContactForm;
