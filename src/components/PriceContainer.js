import styles from "./PriceContainer.module.css";

const PriceContainer = () => {
  return (
    <div className={styles.prices}>
      <div className={styles.pricesChild} />
      <div className={styles.pricesItem} />
      <div className={styles.pricesInner} />
      <b className={styles.normal}>Normal</b>
      <b className={styles.medium}>Medium</b>
      <b className={styles.premium}>Premium</b>
      <b className={styles.z}>29.99zł</b>
      <b className={styles.z1}>39.99zł</b>
      <b className={styles.z2}>49.99 zł</b>
    </div>
  );
};

export default PriceContainer;
