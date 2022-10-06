import { makeAutoObservable } from "mobx";
import ordersService from "../services/ordersService";
import { splitChunks } from "../utils/pages";
import { filterData } from "../utils/filters";

export default class Store {
  isShowPopUp = false;
  ordersData = null;
  loadingError = false;
  isLoading = false;
  selectedPage = 0;

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

  async getFilteredData(data) {
    try {
      this.setLoadingStatus(true);
      const dataFromAPI = await ordersService.getOrdersData();
      this.setOrdersDataToStore(splitChunks(filterData(dataFromAPI.data.results, data), 20));
      this.setSelectedPage(0);
      console.log(this.ordersData);
    } catch (error) {
      this.setError(error);
      console.log(error);
    } finally {
      this.setLoadingStatus(false);
    }
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
