import { useContext } from "react";
import PopUp from "../../UI/popup/PopUp";
import styles from "./incomeBlock.module.scss";
import { Context } from "../../..";
import cog from "../../../assets/cog.png";
import hide_icon from "../../../assets/hide_icon.png";
import search_icon from "../../../assets/search_icon.png";

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
          <h1>Tikers</h1>
          <div onClick={showPopUp} className={styles.icon}>
            <img src={cog} alt="icon-config" />
          </div>
        </div>
        <div className={styles.hide_button_wrapper}>
          <img src={hide_icon} alt="icon-hide" />
          <button onClick={showSidebar}>Hide Panel</button>
        </div>
      </div>
      <div className={styles.buttons_block}>
        <button className={styles.active_button} onClick={showPopUp}>
          Tiker +
        </button>
        <button className={styles.disabled_button} onClick={showPopUp}>
          Duplicate tiker
        </button>
        <div className={styles.sm_buttons_block}>
          <button className={styles.disabled_button} onClick={showPopUp}>
            Make payment
          </button>
          <button className={styles.disabled_button} onClick={showPopUp}>
            To delete
          </button>
        </div>
        <div className={styles.sm_buttons_block_2}>
          <button className={styles.disabled_button} onClick={showPopUp}>
            To write-off
          </button>
          <button className={styles.disabled_button} onClick={showPopUp}>
            To move
          </button>
        </div>
        <button className={styles.disabled_button} onClick={showPopUp}>
          Returns to supplier upon receipt
        </button>
        <div className={styles.sm_buttons_block_3}>
          <button className={styles.active_button} onClick={showPopUp}>
            Import
          </button>
          <button className={styles.active_button} onClick={showPopUp}>
            Export
          </button>
          <button className={styles.active_button} onClick={showPopUp}>
            Print
          </button>
        </div>
      </div>
      <div className={styles.wrapper_input}>
        <input type="text" placeholder="Tiker number, tiker name..." />
        <img src={search_icon} onClick={showPopUp} />
      </div>
      <PopUp />
    </div>
  );
};

export default IncomeBlock;
