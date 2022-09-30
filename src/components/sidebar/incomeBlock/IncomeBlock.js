import React from "react";
import styles from "./incomeBlock.module.scss";

const IncomeBlock = ({ props }) => {
  const handleChange = () => {
    props(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.hide_button_block}>
        <button onClick={handleChange}>hide panel</button>
      </div>
    </div>
  );
};

export default IncomeBlock;
