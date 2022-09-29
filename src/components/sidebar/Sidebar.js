import React from "react";
import FiltersBlock from "./filtersBlock/FiltersBlock";
import IncomeBlock from "./incomeBlock/IncomeBlock";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      <IncomeBlock />
      <FiltersBlock />
    </aside>
  );
};

export default Sidebar;
