import { useContext, useState } from "react";
import styles from "./filtersBlock.module.scss";
import { Context } from "../../..";

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

  /* 
  FIXES
  - пошук чутливий до реєстру.(вказати в UI, що пошук чутливий до реєстру)
  */

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
  };
  return (
    <div className={styles.wrapper}>
      <h1>FiltersBlock</h1>
      <input
        type="text"
        placeholder="Currency"
        value={currencyName}
        onChange={(e) => setCurrencyName(e.target.value)}
      />
      <input type="text" placeholder="Locale" value={locale} onChange={(e) => setLocale(e.target.value)} />
      <input type="text" placeholder="Market" value={market} onChange={(e) => setMarket(e.target.value)} />
      <input type="text" placeholder="Cik" value={cik} onChange={(e) => setCik(e.target.value)} />
      <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
      <input
        type="text"
        placeholder="Composite Figi"
        value={compositeFigi}
        onChange={(e) => setCompositeFigi(e.target.value)}
      />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type="text"
        placeholder="Primary Exchange"
        value={primaryExchange}
        onChange={(e) => setPrimaryExchange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Share Class Figi"
        value={shareClassFigi}
        onChange={(e) => setShareClassFigi(e.target.value)}
      />
      <input type="text" placeholder="Ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} />
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
        filter
      </button>
      <button onClick={resetFilters}>reset filters</button>
    </div>
  );
};

export default FiltersBlock;
