import { useContext } from "react";
import PopUp from "../../UI/popup/PopUp";
import styles from "./incomeBlock.module.scss";
import { Context } from "../../..";
import cog from "../../../assets/cog.png";
import hide_icon from "../../../assets/hide_icon.png";

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
      <div className={styles.heading}>
        <div className={styles.heading_title_wrapper}>
          <h1>Приходы</h1>
          <div onClick={showPopUp} className={styles.icon}>
            <img src={cog} alt="icon-config" />
          </div>
        </div>
        <div className={styles.hide_button_wrapper}>
          <img src={hide_icon} alt="icon-hide" />
          <button onClick={showSidebar}>Скрыть</button>
        </div>
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
