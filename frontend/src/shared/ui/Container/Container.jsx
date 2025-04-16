import React from "react";
import {classNames} from '@/shared/lib/classNames/classNames'

import cls from './Container.module.css'

const Container = ({ children, className }) => {
  return (
    <div className={classNames(cls.container, [className])}>{children}</div>
  );
};

export default Container;
