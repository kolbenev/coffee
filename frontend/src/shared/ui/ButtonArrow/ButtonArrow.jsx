import { classNames } from "@/shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import Sprite from "../Sprite/Sprite";

import cls from "./ButtonArrow.module.css";

const ButtonArrow = ({ className, children, black, white, ...other }) => {
  const buttonClassName = classNames(cls.button, [className], {
    [cls.flex]: children,
    [cls.black]: black,
    [cls.white]: white,
  });

  const content = (
    <>
      {children && <span className={cls.value}>{children}</span>}
      <span
        className={classNames(cls.arrow, [], { [cls.only_arrow]: !children })}
      >
        <Sprite icon="arrow" width="9" height="8" />
      </span>
    </>
  );

  if (other.to) {
    return (
      <Link className={buttonClassName} {...other}>
        {content}
      </Link>
    );
  } else if (other.href)
    return (
      <a className={buttonClassName} {...other}>
        {content}
      </a>
    );
  else
    return (
      <button className={buttonClassName} {...other}>
        {content}
      </button>
    );
};

export default ButtonArrow;
