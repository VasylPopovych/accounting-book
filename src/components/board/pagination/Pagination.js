import styles from "./pagination.module.scss";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../..";
import { countPages } from "../../../utils/pages";
import { observer } from "mobx-react-lite";

const Pagination = () => {
  const [pages, setPages] = useState(null);
  const { store } = useContext(Context);

  useEffect(() => {
    if (store.ordersData) setPages(countPages(store.ordersData));
    console.log(pages);
  }, [store.ordersData]);

  if (store.ordersData) {
    return (
      <div className={styles.wrapper}>
        dfh
        {/* {pages.map((page) => (
          <div key={page}>{page}</div>
        ))} */}
      </div>
    );
  }
  return <div className={styles.wrapper}>Pagination</div>;
};

export default observer(Pagination);
