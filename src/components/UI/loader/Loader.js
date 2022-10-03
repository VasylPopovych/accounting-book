import styles from "./loader.module.scss";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <MoonLoader className={styles.loader} size={100} />
    </div>
  );
};

export default Loader;
