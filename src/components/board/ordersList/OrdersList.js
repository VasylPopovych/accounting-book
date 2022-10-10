import { useContext, useEffect } from "react";
import Order from "../../common/order/Order";
import styles from "./ordersList.module.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import Loader from "../../UI/loader/Loader";
import uuid from "react-uuid";
import { dataKeys } from "../../../constants/constants";

const OrdersList = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getData();
  }, []);

  if (store.isLoading) return <Loader />;

  if (store.loadingError) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.wrapper_error}>
          <h1>Error with loading tikers</h1>
          <h2>{store.loadingError.message}</h2>
          <h3>Please try again later</h3>
        </div>
      </main>
    );
  }

  if (store.ordersData && store.ordersData.length == 0) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.titles_wrapper}>
          <input className={styles.checkbox} type="checkbox" />
          {dataKeys.map((key) => (
            <div key={key} className={styles.titles_item}>
              {key}
            </div>
          ))}
        </div>
        <div className={styles.not_found_items}>
          <h1>Tikers Not Found</h1>
        </div>
      </main>
    );
  }

  if (store.ordersData) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.titles_wrapper}>
          <input className={styles.checkbox} type="checkbox" />
          {dataKeys.map((key) => (
            <div key={key} className={styles.titles_item}>
              {key}
            </div>
          ))}
        </div>
        {store.ordersData[store.selectedPage].map((elem) => (
          <Order props={elem} key={uuid()} />
        ))}
      </main>
    );
  }
};

export default observer(OrdersList);
