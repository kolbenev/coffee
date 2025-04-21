import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // или 'auto'
    });
  }, [pathname]);
};

