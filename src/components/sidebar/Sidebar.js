import React, { useState } from "react";
import FiltersBlock from "./filtersBlock/FiltersBlock";
import IncomeBlock from "./incomeBlock/IncomeBlock";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const [isVisible, setVisibility] = useState(" ");
  const handleChange = (arg) => {
    if (arg) {
      setVisibility(arg);
      sessionStorage.setItem("isVisiblePanel", "true");
    } else {
      setVisibility(false);
      sessionStorage.removeItem("isVisiblePanel");
    }
  };

  if (isVisible && sessionStorage.isVisiblePanel) {
    return (
      <aside className={styles.wrapper}>
        <IncomeBlock props={handleChange} />
        <FiltersBlock />
      </aside>
    );
  } else {
    return (
      <aside className={styles.hidden}>
        <button onClick={handleChange}>show</button>
      </aside>
    );
  }
};

export default Sidebar;
