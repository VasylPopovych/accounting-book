import styles from "./statusBar.module.scss";
import { Context } from "../../..";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const StatusBar = () => {
  const { store } = useContext(Context);

  const countTikers = (key) => {
    let result = store.tikersData.reduce(
      (sum, page) => sum + page.filter((tiker) => Object.values(tiker).includes(key)).length,
      0
    );
    return result;
  };

  if (store.tikersData) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.status_bar_item}>
          Active Tikers: <span>{countTikers(true)} </span>
        </div>
        <div className={styles.status_bar_item}>
          Stocks: <span>{countTikers("stocks")} </span>
        </div>
        <div className={styles.status_bar_item}>
          UNITs: <span>{countTikers("UNIT")} </span>
        </div>
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
