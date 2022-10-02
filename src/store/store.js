import { makeAutoObservable } from "mobx";
import ordersService from "../services/ordersService";

export default class Store {
  isShowPopUp = false;
  ordersData = null;
  loadingError = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setShowPopUp(bool) {
    this.isShowPopUp = bool;
  }

  setOrdersDataToStore(data) {
    this.ordersData = data;
  }

  setLoadingStatus(bool) {
    this.isLoading = bool;
  }

  setError(err) {
    this.loadingError = err;
  }

  async getData() {
    try {
      this.setLoadingStatus(true);
      const dataFromAPI = await ordersService.getOrdersData();
      this.setOrdersDataToStore(dataFromAPI.data.results);
      console.log(dataFromAPI.data.results);
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoadingStatus(false);
    }
  }
}
