import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../model/productsSlice";

export const useGetProducts = () => {
  const products = useSelector((s) => s.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length);
    dispatch(getProducts());
  }, []);

  return products;
};
