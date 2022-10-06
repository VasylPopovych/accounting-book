import styles from "./order.module.scss";
import { getDateFormat } from "../../../utils/datesFormater";

const Order = ({ props }) => {
  const date = getDateFormat(props.last_updated_utc).slice(0, 8);
  const time = getDateFormat(props.last_updated_utc).slice(9);

  return (
    <div className={styles.wrapper}>
      <input className={styles.checkbox} type="checkbox" />
      <div>{props.cik}</div>
      <div>{props.composite_figi}</div>
      <div className={styles.currency_name}>{props.currency_name}</div>
      <div>
        {date}
        <span className={styles.time}>{time}</span>
      </div>
      <div>{props.locale}</div>
      <div>{props.market}</div>
      <div className={styles.name}>{props.name}</div>
      <div>{props.primary_exchange}</div>
      <div>{props.share_class_figi}</div>
      <div>{props.ticker}</div>
      <div>{props.type}</div>
    </div>
  );
};

export default Order;
