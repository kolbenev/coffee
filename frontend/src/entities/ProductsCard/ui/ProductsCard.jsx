import Box from "./Box";
import {classNames} from '@/shared/lib/classNames/classNames'

import cls from "./ProductsCard.module.css";

const ProductsCard = ({ location, num, title, className,photo, children }) => {
  return (
    <li className={classNames(cls.card, [className])}>
      <Box location={location} num={num} photo={photo}/>
      <h5 className={cls.title}>{title}</h5>
      <p className={cls.text}>{children}</p>
    </li>
  );
};

export default ProductsCard;
