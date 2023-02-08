import styles from "./UserOpinionContainer.module.css";

const UserOpinionContainer = () => {
  return (
    <div className={styles.opinions3}>
      <img className={styles.opinions3Child} alt="" src="../star-1.svg" />
      <img className={styles.opinions3Item} alt="" src="../star-2.svg" />
      <img className={styles.opinions3Inner} alt="" src="../star-1.svg" />
      <img className={styles.starIcon} alt="" src="../star-1.svg" />
      <img className={styles.opinions3Child1} alt="" src="../star-1.svg" />
      <div className={styles.usersOpinion}>
        <p className={styles.users}>Users</p>
        <p className={styles.opinion}>opinion</p>
      </div>
    </div>
  );
};

export default UserOpinionContainer;
