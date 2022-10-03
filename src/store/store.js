import { makeAutoObservable } from "mobx";
import ordersService from "../services/ordersService";
import { splitChunks } from "../utils/pages";

export default class Store {
  isShowPopUp = false;
  ordersData = null;
  loadingError = null;
  isLoading = false;
  selectedPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedPage(page) {
    this.selectedPage = page;
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
      this.setOrdersDataToStore(splitChunks(dataFromAPI.data.results, 20));
      console.log(this.ordersData);
    } catch (error) {
      this.setError(error);
      console.log(error);
    } finally {
      this.setLoadingStatus(false);
    }
  }
}
