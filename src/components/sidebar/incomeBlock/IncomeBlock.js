import { useContext } from "react";
import PopUp from "../../UI/popup/PopUp";
import styles from "./incomeBlock.module.scss";
import { Context } from "../../..";

const IncomeBlock = ({ props }) => {
  const { store } = useContext(Context);
  const showSidebar = () => {
    props(false);
  };

  const showPopUp = () => {
    store.setShowPopUp(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.hide_button_block}>
        <button onClick={showSidebar}>hide panel</button>
      </div>
      <div className={styles.buttons_block}>
        <button onClick={showPopUp}>One</button>
        <button onClick={showPopUp}>Two</button>
        <button onClick={showPopUp}>Three</button>
        <button onClick={showPopUp}>Four</button>
        <button onClick={showPopUp}>Five</button>
        <button onClick={showPopUp}>Six</button>
        <PopUp />
      </div>
    </div>
  );
};

export default IncomeBlock;
