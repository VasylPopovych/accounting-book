import { useState } from "react";
import FiltersBlock from "./filtersBlock/FiltersBlock";
import IncomeBlock from "./incomeBlock/IncomeBlock";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const [isVisible, setVisibility] = useState(true);
  const handleChange = (arg) => {
    if (arg) {
      setVisibility(arg);
    } else {
      setVisibility(false);
    }
  };

  if (isVisible) {
    return (
      <aside className={styles.wrapper}>
        <IncomeBlock props={handleChange} />
        <FiltersBlock />
      </aside>
    );
  }
  return (
    <aside className={styles.hidden}>
      <button onClick={handleChange}>show</button>
    </aside>
  );
};

export default Sidebar;
