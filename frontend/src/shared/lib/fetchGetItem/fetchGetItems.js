import { MAIN_API } from "@/shared/api/MAIN_API";

export const fetchGetItems = async (api) => {
  try {
    const resp = await fetch(MAIN_API + api);
    if (!resp.ok) {
      throw Error();
    }
    const data = await resp.json();
    console.log(data)
    return data;
  } catch (err) {
    return [];
  }
};
