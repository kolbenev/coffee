import React from "react";
import ReactMarquee from "react-fast-marquee";
import { useGetMarquee } from "../lib/hooks/useGetMarquee";

import cls from "./Marquee.module.css";

const Marquee = () => {
  const data = useGetMarquee();

  return (
    <div className={cls.marquee}>
      {data.length > 0 && (
        <ReactMarquee gradient={false}>
          {data.map((item, index) => (
            <div className={cls.item} key={index}>
              {item.name} {item.price} $
            </div>
          ))}
        </ReactMarquee>
      )}
    </div>
  );
};

export default Marquee;
