import React from "react";

import cls from "./FlexSection.module.css";

import image from "../assets/image.png";
import image_2 from "../assets/image-2.png";

const Image = () => {
  return (
    <picture  className={cls.picture}>
      <source media="(max-width:480px)" srcSet={image_2} />
      <img   className={cls.img} src={image} alt="image" />
    </picture>
  );
};

export default Image;
