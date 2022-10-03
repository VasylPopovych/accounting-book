import styles from "./pagination.module.scss";
import { useContext } from "react";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const { store } = useContext(Context);

  const handlePageClick = (event) => {
    store.setSelectedPage(event.selected);
  };

  if (store.ordersData) {
    return (
      <ReactPaginate
        className={styles.wrapper}
        pageClassName={styles.page}
        activeClassName={styles.active_page}
        breakLabel="..."
        nextLabel=" next  >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={store.ordersData.length}
        previousLabel=" <  previous"
        renderOnZeroPageCount={undefined}
      />
    );
  }
  return <div className={styles.wrapper}></div>;
};

export default observer(Pagination);
