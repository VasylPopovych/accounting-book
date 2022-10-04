import { useState } from "react";
import FiltersBlock from "./filtersBlock/FiltersBlock";
import IncomeBlock from "./incomeBlock/IncomeBlock";
import styles from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div onClick={handleChange} className={styles.icon_wrapper}>
        <FontAwesomeIcon icon={faArrowRight} size="lg" color="#5a8fff" />
      </div>
    </aside>
  );
};

export default Sidebar;
