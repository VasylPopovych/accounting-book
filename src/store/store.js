import { makeAutoObservable } from "mobx";

export default class Store {
  isShowPopUp = false;

  constructor() {
    makeAutoObservable(this);
  }

  setShowPopUp(bool) {
    this.isShowPopUp = bool;
  }
}
