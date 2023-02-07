import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./WORKOUTPLANS.module.css";

const WORKOUTPLANS = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onListOfGymsClick = useCallback(() => {
    navigate("/top-10");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.workoutPlans}>
      <div className={styles.socials}>
        <b className={styles.fitnessBunch}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
      </div>
      <div className={styles.workoutBackground} />
      <b className={styles.freeWorkoutPlans}>FREE WORKOUT PLANS EVERY MONTH</b>
      <div className={styles.workoutPlansMain}>
        <img
          className={styles.workoutPlansBackground}
          alt=""
          src="../workout-plans-background@2x.png"
        />
        <Button
          className={styles.healthiconsuiUserProfileOu}
          variant="outline-warning"
        >
          Log In
        </Button>
        <div className={styles.fitnessBunch1}>
          <b className={styles.fitnessBunch2}>
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
        <div className={styles.workoutPlans1}>
          <p className={styles.fitness}>Workout</p>
          <p className={styles.bunch}>plans</p>
        </div>
      </div>
    </div>
  );
};

export default WORKOUTPLANS;
