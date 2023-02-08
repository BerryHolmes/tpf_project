import styles from "./NeighbourhoodGymContainer.module.css";

const NeighbourhoodGymContainer = () => {
  return (
    <div className={styles.infoAbNeighbourhood}>
      <img
        className={styles.addYourGymBackground}
        alt=""
        src="../add-your-gym-background@2x.png"
      />
      <img className={styles.opinionsIcon} alt="" src="../opinions.svg" />
      <img className={styles.gymsIcon} alt="" src="../gyms.svg" />
      <img
        className={styles.fitnesFreaksIcon}
        alt=""
        src="../fitnes-freaks.svg"
      />
      <img className={styles.expIcon} alt="" src="../exp.svg" />
      <b className={styles.addYourNeighbourhood}>
        Add your neighbourhood gym today!
      </b>
      <div className={styles.loremIpsumDolorContainer}>
        <p className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className={styles.crasSuscipitSem}>
          Cras suscipit sem sit amet elit lobortis varius. Vivamus finibus
          molestie vulputate.
        </p>
      </div>
      <b className={styles.b}>15+</b>
      <b className={styles.k}>5k+</b>
      <b className={styles.b1}>50+</b>
      <b className={styles.k1}>1k+</b>
      <div className={styles.yearsOfExperienceContainer}>
        <p className={styles.loremIpsumDolor}>{`Years of `}</p>
        <p className={styles.crasSuscipitSem}>Experience</p>
      </div>
      <div className={styles.happyFitnessFreaksContainer}>
        <p className={styles.loremIpsumDolor}>{`Happy `}</p>
        <p className={styles.crasSuscipitSem}>Fitness Freaks</p>
      </div>
      <div className={styles.addedGyms}>Added gyms</div>
      <div className={styles.opinions}>Opinions</div>
      <img
        className={styles.simpleLineIconscalender}
        alt=""
        src="../simplelineiconscalender.svg"
      />
      <img
        className={styles.antDesignbarChartOutlinedIcon}
        alt=""
        src="../antdesignbarchartoutlined.svg"
      />
      <img className={styles.carbonmapIcon} alt="" src="../carbonmap.svg" />
      <img
        className={styles.gridiconshistory}
        alt=""
        src="../gridiconshistory.svg"
      />
    </div>
  );
};

export default NeighbourhoodGymContainer;
