import { classNames } from "@/shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import Sprite from "../Sprite/Sprite";

import cls from "./ButtonArrow.module.css";

const ButtonArrow = ({ className, to, children, black, white, ...other }) => {
  const buttonClassName = classNames(cls.button, [className], {
    [cls.flex]: children,
    [cls.black]: black,
    [cls.white]: white,
  });

  const content = (
    <>
      {children && <span className={cls.value}>{children}</span>}
      <span className={classNames(cls.arrow, [], { [cls.only_arrow]: !children })}>
        <Sprite icon="arrow" width="9" height="8" />
      </span>
    </>
  );
  return (
    <>
      {to ? (
        <Link className={buttonClassName} to={to} {...other}>
          {content}
        </Link>
      ) : (
        <button className={buttonClassName} {...other}>
          {content}
        </button>
      )}
    </>
  );
};

export default ButtonArrow;
