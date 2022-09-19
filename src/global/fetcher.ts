import { API_URL } from "./config/constants";

export const fetcher = async <T = Response>(url: string): Promise<T> => {
  const res = await fetch(API_URL + url, {
    mode: "no-cors",
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin"
  });

  return res.json();
};
