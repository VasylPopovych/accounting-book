import React, { useContext } from "react";
import styles from "./popup.module.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const PopUp = () => {
  const { store } = useContext(Context);
  const hidePopUp = () => {
    store.setShowPopUp(false);
  };

  return store.isShowPopUp ? (
    <div className={styles.wrapper}>
      <div className={styles.popup}>
        <button onClick={hidePopUp}>OK</button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default observer(PopUp);
