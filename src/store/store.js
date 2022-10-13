import { makeAutoObservable } from "mobx";
import tikersService from "../services/tikersService";
import { splitChunks } from "../utils/pages";
import { filterData } from "../utils/filters";

export default class Store {
  isShowPopUp = false;
  tikersData = null;
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

  setTikersDataToStore(data) {
    this.tikersData = data;
  }

  setLoadingStatus(bool) {
    this.isLoading = bool;
  }

  setError(err) {
    this.loadingError = err;
  }

  async getFilteredData(data) {
    try {
      this.setError(null);
      this.setLoadingStatus(true);
      this.setSelectedPage(0);
      const dataFromAPI = await tikersService.getTikersData();
      this.setTikersDataToStore(splitChunks(filterData(dataFromAPI.data.results, data), 20));
    } catch (error) {
      this.setError(error);
      console.log(error);
    } finally {
      this.setLoadingStatus(false);
    }
  }

  async getData() {
    try {
      this.setError(null);
      this.setLoadingStatus(true);
      this.setSelectedPage(0);
      const dataFromAPI = await tikersService.getTikersData();
      this.setTikersDataToStore(splitChunks(dataFromAPI.data.results, 20));
    } catch (error) {
      this.setError(error);
      console.log(error);
    } finally {
      this.setLoadingStatus(false);
    }
  }
}
