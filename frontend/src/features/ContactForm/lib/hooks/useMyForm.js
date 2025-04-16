import { useCallback, useMemo } from "react";
import * as Yup from "yup";

export const useMyForm = (setAnswer) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    preferred_time: "",
    comment: "",
  };

  const schema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().min(18).required(),
        preferred_time: Yup.string()
          .test((value) => {
            if (!value) return true;
            const match = value.match(/^с (\d{2}):(\d{2}) до (\d{2}):(\d{2})$/);
            if (!match) return false;

            const [, fromH, fromM, toH, toM] = match.map(Number);

            const fromTotal = fromH * 60 + fromM;
            const toTotal = toH * 60 + toM;

            return toTotal > fromTotal;
          })
          .required(),
      }),
    []
  );

  const sendData = useCallback(async (e, { resetForm }) => {
    fetch("http://109.73.197.17:8080/api/callback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((resp) => {
        if (resp.ok)
          setAnswer({
            get: true,
            status: resp.status,
          });
        else throw Error(resp.status);
      })
      .catch((err) => {
        setAnswer({ get: true, status: err });
        return [];
      })
      .finally(() => resetForm());
  }, []);

  return { initialValues, schema, sendData };
};
