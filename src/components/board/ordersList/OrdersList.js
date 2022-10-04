import { useContext, useEffect } from "react";
import Order from "../../common/order/Order";
import styles from "./ordersList.module.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import Loader from "../../UI/loader/Loader";
import uuid from "react-uuid";

const OrdersList = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    store.getData();
  }, []);

  if (store.isLoading) return <Loader />;

  if (store.ordersData) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.titles}> Titles</div>
        {store.ordersData[store.selectedPage].map((elem) => (
          <Order props={elem} key={uuid()} />
        ))}
      </main>
    );
  } else if (store.loadingError) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.titles}> Titles</div>
        <h1>
          Error with loading orders. <span>{store.loadingError.message}</span> Please try again later.{" "}
        </h1>
      </main>
    );
  }
};

export default observer(OrdersList);
