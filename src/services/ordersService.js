import axios from "axios";

export const BASE_URL = "https://community-zenpayroll.p.rapidapi.com/companies/%7Bcompany_id%7D/payrolls";

const $api = axios.create({
  baseURL: BASE_URL,
  params: { access_token: "undefined" },
  headers: {
    "X-RapidAPI-Key": "c11b82b3f3msha4084eab8da6a52p196792jsn42537fce3ad2",
    "X-RapidAPI-Host": "community-zenpayroll.p.rapidapi.com",
  },
});

export const request = async () => {
  const res = await $api.get();
  console.log("request send");
  console.log(res.data);
};
