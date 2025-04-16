import { useDispatch, useSelector } from "react-redux";
import { getMarqueeData } from "../../model/marqueeSlice";
import { useEffect } from "react";

export const useGetMarquee = () => {
  const marquee = useSelector((s) => s.marquee);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!marquee.length) {
      dispatch(getMarqueeData());
    }
  }, []);

  return marquee;
};
