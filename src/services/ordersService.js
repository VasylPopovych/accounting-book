import axios from "axios";
import { API_KEY } from "../constants/constants";

const BASE_URL = `https://api.polygon.io/v3/reference/tickers?limit=1000${API_KEY}`;

const $api = axios.create({
  baseURL: BASE_URL,
});

export default class ordersService {
  static getOrdersData() {
    return $api.get();
  }
}
