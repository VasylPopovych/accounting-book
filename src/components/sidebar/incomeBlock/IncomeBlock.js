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
        <button className={styles.active_button} onClick={showPopUp}>
          Приход +
        </button>
        <button className={styles.disabled_button} onClick={showPopUp}>
          Дублировать приход
        </button>
        <div className={styles.sm_buttons_block}>
          <button className={styles.disabled_button} onClick={showPopUp}>
            Провести
          </button>
          <button className={styles.disabled_button} onClick={showPopUp}>
            На удаление
          </button>
        </div>
        <div className={styles.sm_buttons_block_2}>
          <button className={styles.disabled_button} onClick={showPopUp}>
            В списание
          </button>
          <button className={styles.disabled_button} onClick={showPopUp}>
            В перемещение
          </button>
        </div>
        <button className={styles.disabled_button} onClick={showPopUp}>
          Возвраты поставщику по приходу
        </button>
        <div className={styles.sm_buttons_block_3}>
          <button className={styles.active_button} onClick={showPopUp}>
            Импорт
          </button>
          <button className={styles.active_button} onClick={showPopUp}>
            Экспорт
          </button>
          <button className={styles.active_button} onClick={showPopUp}>
            Печать
          </button>
        </div>
      </div>
      <div className={styles.wrapper_input}>
        <input type="text" placeholder="Номер документа, название товара..." />
        <img src={search_icon} onClick={showPopUp} />
      </div>
      <PopUp />
    </div>
  );
};

export default IncomeBlock;
