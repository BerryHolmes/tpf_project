import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ClassesContainer.module.css";

const ClassesContainer = () => {
  const navigate = useNavigate();

  const onClassesSectionContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='communityBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDiscoverMoreClick = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onWorkoutPlansClick = useCallback(() => {
    navigate("/workout-plans");
  }, [navigate]);

  const onPersonalTrainerClick = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onGymMembershipClick = useCallback(() => {
    navigate("/gym-membership");
  }, [navigate]);

  const onGymMembership1Click = useCallback(() => {
    navigate("/gym-membership");
  }, [navigate]);

  const onKnowMoreClick = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onKnowMore1Click = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onKnowMore2Click = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  return (
    <div
      className={styles.classesSection}
      onClick={onClassesSectionContainerClick}
    >
      <div className={styles.doWhatBringsJoyBackground} />
      <b className={styles.doWhatBrings}>Do what brings you joy!</b>
      <Button
        className={styles.discoverMore}
        variant="light"
        onClick={onDiscoverMoreClick}
      >
        Dicover more
      </Button>
      <Button
        className={styles.workoutPlans}
        variant="dark"
        href="/workout-plans"
        onClick={onWorkoutPlansClick}
      >
        Workout Plans
      </Button>
      <Button
        className={styles.personalTrainer}
        variant="dark"
        href="/personal-trainers"
        onClick={onPersonalTrainerClick}
      >
        Personal Trainer
      </Button>
      <Button
        className={styles.gymMembership}
        variant="dark"
        href="/gym-membership"
        onClick={onGymMembershipClick}
      >
        Gym Membership
      </Button>
      <Button
        className={styles.gymMembership1}
        variant="dark"
        href="/top-10"
        onClick={onGymMembership1Click}
      >
        TOP 10
      </Button>
     
      
      <b className={styles.gymMembership2}>
        
      </b>
      <b className={styles.personalTrainer1}>
      </b>
      <b className={styles.workoutPlans1}>
      </b>
      <img className={styles.yogaImgIcon} alt="" src="../yoga-img@2x.png" />
      <div className={styles.yogaRec} />
      <img
        className={styles.calistheImgIcon}
        alt=""
        src="../calisthe-img@2x.png"
      />
      <div className={styles.calistheRec} />
      <img
        className={styles.cardioRectaIcon}
        alt=""
        src="../cardio-recta@2x.png"
      />
      <div className={styles.cardioRec} />
      <b className={styles.yogaClasses}>Yoga Classes</b>
      <b className={styles.calisthenicsCourse}>Calisthenics Course</b>
      <b className={styles.cardio}>Cardio</b>
      <div className={styles.session}>$20 / Session</div>
      <div className={styles.membershipIncluded}>Membership included</div>
      <div className={styles.membershipIncluded1}>
        <p className={styles.gym}>{`Membership `}</p>
        <p className={styles.membership}>included</p>
      </div>
      <div className={styles.textYoga}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className={styles.textCalisthe}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className={styles.textCardio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className={styles.knowMore} onClick={onKnowMoreClick}>
        Know More
      </div>
      <div className={styles.knowMore1} onClick={onKnowMore1Click}>
        Know More
      </div>
      <div className={styles.knowMore2} onClick={onKnowMore2Click}>
        Know More
      </div>
    </div>
  );
};

export default ClassesContainer;
