import React from "react";
import News from "@/widgets/News/ui/News";
import FlexSection from "@/widgets/FlexSection/ui/FlexSection";

import cls from './NewsPage.module.css'

const NewsPage = () => {
  return (
    <>
      <News className={cls.news}  brackets={false}/>
      <FlexSection />
    </>
  );
};

export default NewsPage;
