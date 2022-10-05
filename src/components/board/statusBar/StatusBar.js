import styles from "./statusBar.module.scss";
import { Context } from "../../..";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const StatusBar = () => {
  const { store } = useContext(Context);

  const countOrders = (key) => {
    let result = store.ordersData.reduce(
      (sum, page) => sum + page.filter((order) => Object.values(order).includes(key)).length,
      0
    );
    return result;
  };

  if (store.ordersData) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.status_bar_wrapper}>
          <div className={styles.status_bar_item}>
            Active Tikers: <span>{countOrders(true)} шт.</span>
          </div>
          <div className={styles.status_bar_item}>
            Stocks: <span>{countOrders("stocks")} шт.</span>
          </div>
          <div className={styles.status_bar_item}>
            UNITs: <span>{countOrders("UNIT")} шт.</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.status_bar_wrapper}>
        <div className={styles.status_bar_item}>Active Tikers: </div>
        <div className={styles.status_bar_item}>Stocks: </div>
        <div className={styles.status_bar_item}>UNITs: </div>
      </div>
      <div className={styles.titles}> Titles</div>
    </div>
  );
};

export default observer(StatusBar);
