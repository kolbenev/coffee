import React from "react";
import { NewsCard } from "@/entities/NewsCard";
import { useGetNews } from "../lib/hooks/useGetNews";

import cls from "./NewsList.module.css";

const NewsBlock = () => {
  const news = useGetNews()
  
  return (
    <ul className={cls.list}>
      {news.slice(0, 3).map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default NewsBlock;
