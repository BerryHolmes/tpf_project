import styles from "./OpinionContainer.module.css";

const OpinionContainer = () => {
  return (
    <div className={styles.ideaAboutWebsite}>
      <div className={styles.ideaOfWebsiteBackground} />
      <div className={styles.giveOpinion}>
        <img
          className={styles.giveOpinionChild}
          alt=""
          src="../ellipse-37.svg"
        />
        <b className={styles.giveAnOpinion}>Give an opinion</b>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img className={styles.planeIcon} alt="" src="../plane.svg" />
      </div>
      <div className={styles.manageCarnets}>
        <img
          className={styles.giveOpinionChild}
          alt=""
          src="../ellipse-36.svg"
        />
        <b className={styles.manageYourCarnets}>Manage your carnets</b>
        <div className={styles.loremIpsumDolor1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
      </div>
      <div className={styles.listOfTheGyms}>
        <img
          className={styles.listOfTheGymsChild}
          alt=""
          src="../ellipse-38.svg"
        />
        <b className={styles.listOfThe}>{`List of the gyms `}</b>
        <div className={styles.loremIpsumDolor2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          className={styles.variousCup}
          alt=""
          src="../24--various--cup.svg"
        />
      </div>
      <b className={styles.ideaOfOur}>Idea of our website</b>
    </div>
  );
};

export default OpinionContainer;
