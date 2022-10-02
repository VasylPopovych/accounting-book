import styles from "./statusBar.module.scss";
import { Context } from "../../..";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const StatusBar = () => {
  const { store } = useContext(Context);

  const countOrders = (key) => {
    return store.ordersData.filter((order) => Object.values(order).includes(key)).length;
  };

  if (store.ordersData) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.status_bar_item}>Active Tikers: {countOrders(true)} </div>
        <div className={styles.status_bar_item}>Stocks: {countOrders("stocks")} </div>
        <div className={styles.status_bar_item}>UNITs: {countOrders("UNIT")}</div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.status_bar_item}>Active Tikers: </div>
      <div className={styles.status_bar_item}>Stocks: </div>
      <div className={styles.status_bar_item}>UNITs: </div>
    </div>
  );
};

export default observer(StatusBar);
