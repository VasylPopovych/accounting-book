import { useContext, useState } from "react";
import styles from "./filtersBlock.module.scss";
import { Context } from "../../..";
import calendar_icon from "../../../assets/calendar_icon.png";
import mark_icon from "../../../assets/mark_icon.png";

const FiltersBlock = () => {
  const { store } = useContext(Context);

  const [currencyName, setCurrencyName] = useState("");
  const [locale, setLocale] = useState("");
  const [market, setMarket] = useState("");
  const [cik, setCik] = useState("");
  const [compositeFigi, setCompositeFigi] = useState("");
  const [name, setName] = useState("");
  const [primaryExchange, setPrimaryExchange] = useState("");
  const [shareClassFigi, setShareClassFigi] = useState("");
  const [ticker, setTicker] = useState("");
  const [type, setType] = useState("");

  const filterData = (data) => {
    let arr = [];
    for (let d of data) {
      if (d) arr.push(d);
    }
    store.getFilteredData(arr);
  };

  const resetFilters = () => {
    store.getData();
    setCurrencyName("");
    setLocale("");
    setMarket("");
    setType("");
    setCik("");
    setCompositeFigi("");
    setName("");
    setPrimaryExchange("");
    setShareClassFigi("");
    setTicker("");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>Filters</h1>
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input type="text" placeholder="From" />
          <img src={calendar_icon} />
        </div>
        <div className={styles.container_input}>
          <input type="text" placeholder="To" />
          <img src={calendar_icon} />
        </div>
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="Currency"
            value={currencyName}
            onChange={(e) => setCurrencyName(e.target.value)}
          />
        </div>
        <div className={styles.container_input}>
          <input type="text" placeholder="Locale" value={locale} onChange={(e) => setLocale(e.target.value)} />
        </div>
      </div>
      <div className={styles.container_bg_input}>
        <input type="text" placeholder="Market" value={market} onChange={(e) => setMarket(e.target.value)} />
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input type="text" placeholder="Cik" value={cik} onChange={(e) => setCik(e.target.value)} />
        </div>
        <div className={styles.container_input}>
          <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
        </div>
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="Composite Figi"
            value={compositeFigi}
            onChange={(e) => setCompositeFigi(e.target.value)}
          />
        </div>
        <div className={styles.container_input}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className={styles.sm_inputs_wrapper}>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="Primary Exchange"
            value={primaryExchange}
            onChange={(e) => setPrimaryExchange(e.target.value)}
          />
        </div>
        <div className={styles.container_input}>
          <input
            type="text"
            placeholder="Share Class Figi"
            value={shareClassFigi}
            onChange={(e) => setShareClassFigi(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.container_bg_input}>
        <input type="text" placeholder="Ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} />
      </div>
      <div className={styles.buttons_wrapper}>
        <button
          onClick={() => {
            filterData([
              currencyName,
              locale,
              market,
              type,
              cik,
              compositeFigi,
              name,
              primaryExchange,
              shareClassFigi,
              ticker,
            ]);
          }}>
          Apply
        </button>
        <button onClick={resetFilters}>Reset</button>
        <img src={mark_icon} />
      </div>
      <span>* The search is case sensitive</span>
    </div>
  );
};

export default FiltersBlock;
