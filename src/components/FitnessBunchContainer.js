import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./FitnessBunchContainer.module.css";

const FitnessBunchContainer = ({
  workoutPlansBackground,
  workout,
  plans,
  fITNESSBUNCHCursor,
  openLOGINPopup,
  onHomeClick,
  onListOfGymsClick,
  onAboutUsClick,
}) => {
  const healthiconsuiUserProfileOuStyle = useMemo(() => {
    return {
      cursor: fITNESSBUNCHCursor,
    };
  }, [fITNESSBUNCHCursor]);

  return (
    <div className={styles.workoutPlansMain}>
      <img
        className={styles.workoutPlansBackground}
        alt=""
        src={workoutPlansBackground}
      />
      <Button
        className={styles.healthiconsuiUserProfileOu}
        variant="outline-warning"
        style={healthiconsuiUserProfileOuStyle}
        onClick={openLOGINPopup}
      >
        Log In
      </Button>
      <div className={styles.fitnessBunch}>
        <b className={styles.fitnessBunch1}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home} onClick={onHomeClick}>
          Home
        </div>
        <div
          className={styles.home}
          onClick={onListOfGymsClick}
        >{`List of Gyms `}</div>
        <div className={styles.home} onClick={onAboutUsClick}>
          About us
        </div>
      </div>
      <div className={styles.workoutPlans}>
        <p className={styles.fitness}>{workout}</p>
        <p className={styles.bunch}>{plans}</p>
      </div>
    </div>
  );
};

export default FitnessBunchContainer;
