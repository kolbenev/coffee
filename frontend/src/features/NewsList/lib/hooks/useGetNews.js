import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../model/newsSlice";

export const useGetNews = () => {
  const news = useSelector((s) => s.news);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!news.length) {
      dispatch(getNews());
    }
  }, []);

  return news;
};
