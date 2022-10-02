import styles from "./order.module.scss";

/* "active": true,
   "cik": "0001090872",
   "composite_figi": "BBG000BWQYZ5",
   "currency_name": "usd",
   "last_updated_utc": "2021-04-25T00:00:00Z",
   "locale": "us",
   "market": "stocks",
   "name": "Agilent Technologies Inc.",
   "primary_exchange": "XNYS",
   "share_class_figi": "BBG001SCTQY4",
   "ticker": "A",
   "type": "CS" */

const Order = ({ props }) => {
  const getDateFormat = (date) => {
    const formated = new Date(date);
    let formatedDay = formated.getDate();
    if (formatedDay < 10) formatedDay = "0" + formatedDay;
    let formatedMonth = formated.getMonth() + 1;
    if (formatedMonth < 10) formatedMonth = "0" + formatedMonth;
    const formatedDate = `${formatedDay}:${formatedMonth}:${formated.getFullYear().toString().slice(2)}`;
    const formatedTime = `${formated.toTimeString().slice(0, 5)}`;
    return formatedDate + " " + formatedTime;
  };

  return (
    <div className={styles.wrapper}>
      <div>cik: {props.cik}</div>
      <div>composite_figi: {props.composite_figi}</div>
      <div>currency_name: {props.currency_name}</div>
      <div>last_updated_utc: {getDateFormat(props.last_updated_utc)}</div>
      <div>locale: {props.locale}</div>
      <div>market :{props.market}</div>
      <div>name: {props.name}</div>
      <div>primary_exchange: {props.primary_exchange}</div>
      <div>share_class_figi: {props.share_class_figi}</div>
      <div>ticker: {props.ticker}</div>
      <div>type: {props.type}</div>
    </div>
  );
};

export default Order;
