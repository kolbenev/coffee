import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { postDiff } from "@/features/PricesTable";

import * as Yup from "yup";

export const useDiffForm = (setAnswer) => {
  const dispatch = useDispatch();
  const initialValues = {
    diff: "",
  };

  const schema = useMemo(
    () =>
      Yup.object().shape({
        diff: Yup.number().required(),
      }),
    []
  );

  const sendData = (e, {resetForm}) => {
    dispatch(postDiff({num:e.diff, setAnswer, resetForm}))
  }

  return { initialValues, schema, sendData };
};
