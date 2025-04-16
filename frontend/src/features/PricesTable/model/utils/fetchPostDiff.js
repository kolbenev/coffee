import { MAIN_API } from "@/shared/api/MAIN_API";

export const fetchPostDiff = async ({ num, setAnswer, resetForm }) => {
  try {
    const resp = await fetch(MAIN_API + "prices/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user_dif: num,
      }),
    });

    if (!resp.ok) throw Error(resp.status);

    setAnswer({
      get: true,
      status: resp.status,
    });

    const data = await resp.json();
    return data;
  } catch (err) {
    setAnswer({
      get: true,
      status: err,
    });
    return [];
  } finally {
    resetForm();
  }
};
