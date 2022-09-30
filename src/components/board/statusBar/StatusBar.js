import React from "react";
import styles from "./statusBar.module.scss";
import { request } from "../../../services/ordersService";

const StatusBar = () => {
  return (
    <div className={styles.wrapper}>
      StatusBar
      <button onClick={request}>send request</button>
    </div>
  );
};

export default StatusBar;
