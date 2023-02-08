import styles from "./GymContainer.module.css";

const GymContainer = ({
  gymImageUrl,
  gymName,
  gymNumber,
  gymPrice,
  onRectangleImage7Click,
  onRectangleImage8Click,
  onRectangleImage9Click,
}) => {
  return (
    <div className={styles.top46}>
      <img
        className={styles.top46Child}
        alt=""
        src="../rectangle-121@2x.png"
        onClick={onRectangleImage7Click}
      />
      <img
        className={styles.top46Item}
        alt=""
        src="../rectangle-131@2x.png"
        onClick={onRectangleImage8Click}
      />
      <img
        className={styles.top46Inner}
        alt=""
        src={gymImageUrl}
        onClick={onRectangleImage9Click}
      />
      <b className={styles.gymNo4}>{gymName}</b>
      <b className={styles.gymNo5}>{gymNumber}</b>
      <b className={styles.gymNo6Container}>
        <p className={styles.gymNo6}>{gymPrice}</p>
      </b>
      <div className={styles.krakw}>Kraków</div>
      <div className={styles.katowice}>Katowice</div>
      <div className={styles.katowice1}>Katowice</div>
    </div>
  );
};

export default GymContainer;
