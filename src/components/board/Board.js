import styles from "./board.module.scss";
import TikersList from "./tikersList/TikersList";
import Pagination from "./pagination/Pagination";
import StatusBar from "./statusBar/StatusBar";

const board = () => {
  return (
    <div className={styles.wrapper}>
      <StatusBar />
      <TikersList />
      <Pagination />
    </div>
  );
};

export default board;
