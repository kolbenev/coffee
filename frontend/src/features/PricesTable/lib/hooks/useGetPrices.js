import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrices } from "../../model/pricesSlice";

export const useGetPrices = () => {
  const prices = useSelector((s) => s.prices);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!prices.length) {
      dispatch(getPrices());
    }
  }, []);

  return prices;
};
