import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onListOfGymsClick = useCallback(() => {
    navigate("/frame-7");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/frame-8");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.frameChild}
        alt=""
        src="../rectangle-1722@2x.png"
      />
      <Button
        className={styles.healthiconsuiUserProfileOu}
        variant="outline-warning"
      >
        Log In
      </Button>
      <div className={styles.fitnessBunch}>
        <b className={styles.fitnessBunch1}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
      </div>
      <div className={styles.menus}>
        <div className={styles.home} onClick={onHomeClick}>
          Home
        </div>
        <div
          className={styles.listOfGyms}
          onClick={onListOfGymsClick}
        >{`List of Gyms `}</div>
        <div className={styles.aboutUs} onClick={onAboutUsClick}>
          About us
        </div>
      </div>
      <div className={styles.workoutPlans}>
        <p className={styles.fitness}>Workout</p>
        <p className={styles.bunch}>plans</p>
      </div>
      <img className={styles.socialsIcon} alt="" src="../socials4.svg" />
      <b className={styles.fitnessBunch2}>
        <p className={styles.fitness}>FITNESS</p>
        <p className={styles.bunch}>BUNCH</p>
      </b>
      <div className={styles.frameItem} />
      <b className={styles.freeWorkoutPlans}>FREE WORKOUT PLANS EVERY MONTH</b>
    </div>
  );
};

export default FrameComponent4;
