import { useContext, useEffect } from "react";
import Tiker from "../../common/tiker/Tiker";
import styles from "./tikersList.module.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import Loader from "../../UI/loader/Loader";
import uuid from "react-uuid";
import { dataKeys } from "../../../constants/constants";

const TikersList = () => {
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

  if (store.tikersData && store.tikersData.length == 0) {
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

  if (store.tikersData) {
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
        {store.tikersData[store.selectedPage].map((elem) => (
          <Tiker props={elem} key={uuid()} />
        ))}
      </main>
    );
  }
};

export default observer(TikersList);
