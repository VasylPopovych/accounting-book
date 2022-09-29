import React from "react";
import styles from "./board.module.scss";
import OrdersList from "./ordersList/OrdersList";
import Pagination from "./pagination/Pagination";
import StatusBar from "./statusBar/StatusBar";

const board = () => {
  return (
    <div className={styles.wrapper}>
      <StatusBar />
      <OrdersList />
      <Pagination />
    </div>
  );
};

export default board;
