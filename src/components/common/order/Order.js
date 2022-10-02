import styles from "./order.module.scss";
import { getDateFormat } from "../../../utils/datesFormater";
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
