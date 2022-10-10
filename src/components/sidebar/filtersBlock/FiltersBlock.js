import { useContext, useState } from "react";
import styles from "./filtersBlock.module.scss";
import { Context } from "../../..";
import calendar_icon from "../../../assets/calendar_icon.png";
import mark_icon from "../../../assets/mark_icon.png";

const FiltersBlock = () => {
  const { store } = useContext(Context);
  const [filtersValues, setFilterValue] = useState({
    cik: "",
    composite_figi: "",
    currency_name: "",
    last_updated_utc_from: "",
    last_updated_utc_to: "",
    locale: "",
    market: "",
    name: "",
    primary_exchange: "",
    share_class_figi: "",
    ticker: "",
    type: "",
  });

  const showPopUp = () => {
    store.setShowPopUp(true);
  };

  const handleChange = (prop) => (event) => {
    setFilterValue({ ...filtersValues, [prop]: event.target.value });
  };

  const filterData = () => {
    const notEmptyValues = Object.entries(filtersValues).filter((entrie) => !!entrie[1]);
    store.getFilteredData(notEmptyValues);
  };

  const resetFilters = () => {
    store.getData();
    setFilterValue({
      cik: "",
      composite_figi: "",
      currency_name: "",
      last_updated_utc_from: "",
      last_updated_utc_to: "",
      locale: "",
      market: "",
      name: "",
      primary_exchange: "",
      share_class_figi: "",
      ticker: "",
      type: "",
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>Filters</h1>
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="From: yyyy-mm-dd"
            value={filtersValues.last_updated_utc_from}
            onChange={handleChange("last_updated_utc_from")}
          />
          <img onClick={showPopUp} src={calendar_icon} />
        </div>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="To: yyyy-mm-dd"
            value={filtersValues.last_updated_utc_to}
            onChange={handleChange("last_updated_utc_to")}
          />
          <img onClick={showPopUp} src={calendar_icon} />
        </div>
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="Currency"
            value={filtersValues.currency_name}
            onChange={handleChange("currency_name")}
          />
        </div>
        <div className={styles.container_input}>
          <input type="text" placeholder="Locale" value={filtersValues.locale} onChange={handleChange("locale")} />
        </div>
      </div>
      <div className={styles.container_bg_input}>
        <input type="text" placeholder="Market" value={filtersValues.market} onChange={handleChange("market")} />
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input type="text" placeholder="Cik" value={filtersValues.cik} onChange={handleChange("cik")} />
        </div>
        <div className={styles.container_input}>
          <input type="text" placeholder="Type" value={filtersValues.type} onChange={handleChange("type")} />
        </div>
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="Composite Figi"
            value={filtersValues.composite_figi}
            onChange={handleChange("composite_figi")}
          />
        </div>
        <div className={styles.container_input}>
          <input type="text" placeholder="Name" value={filtersValues.name} onChange={handleChange("name")} />
        </div>
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="Primary Exchange"
            value={filtersValues.primary_exchange}
            onChange={handleChange("primary_exchange")}
          />
        </div>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="Share Class Figi"
            value={filtersValues.share_class_figi}
            onChange={handleChange("share_class_figi")}
          />
        </div>
      </div>
      <div className={styles.container_bg_input}>
        <input type="text" placeholder="Ticker" value={filtersValues.ticker} onChange={handleChange("ticker")} />
      </div>
      <div className={styles.buttons_wrapper}>
        <button onClick={filterData}>Apply</button>
        <button onClick={resetFilters}>Reset</button>
        <img onClick={showPopUp} src={mark_icon} />
      </div>
      <span>* The search is case sensitive</span>
    </div>
  );
};

export default FiltersBlock;
