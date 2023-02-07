import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LOGIN from "../components/LOGIN";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./GYM2KATOWICE.module.css";

const GYM2KATOWICE = () => {
  const [isLOGINPopupOpen, setLOGINPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openLOGINPopup = useCallback(() => {
    setLOGINPopupOpen(true);
  }, []);

  const closeLOGINPopup = useCallback(() => {
    setLOGINPopupOpen(false);
  }, []);

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
    <>
      <div className={styles.gym2Katowice}>
        <div className={styles.socials}>
          <b className={styles.fitnessBunch}>
            <p className={styles.fitness}>FITNESS</p>
            <p className={styles.bunch}>BUNCH</p>
          </b>
        </div>
        <iframe
          className={styles.mapsFullMap}
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d10245.049813920077!2d19.961856973953914!3d50.06264629708339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47165b721af621ff%3A0xd0c9ea42fc144ab8!2sal.%20Pokoju%2016%2C%2031-564%20Krak%C3%B3w!3m2!1d50.0621577!2d19.968210199999998!5e0!3m2!1spl!2spl!4v1674676880360!5m2!1spl!2spl"
        />
        <div className={styles.localizationBackground} />
        <div className={styles.localization}>Localization</div>
        <div className={styles.opinions2}>
          <img className={styles.opinions2Child} alt="" src="../star-1.svg" />
          <img className={styles.opinions2Item} alt="" src="../star-2.svg" />
          <img className={styles.opinions2Inner} alt="" src="../star-1.svg" />
          <img className={styles.starIcon} alt="" src="../star-1.svg" />
          <img className={styles.opinions2Child1} alt="" src="../star-1.svg" />
          <div className={styles.usersOpinion}>
            <p className={styles.fitness}>Users</p>
            <p className={styles.bunch}>opinion</p>
          </div>
        </div>
        <div className={styles.gym2}>
          <img
            className={styles.gym2BackgroundIcon}
            alt=""
            src="../gym2-background@2x.png"
          />
          <Button
            className={styles.healthiconsuiUserProfileOu}
            variant="outline-warning"
            onClick={openLOGINPopup}
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
          <div className={styles.gymNo2Container}>
            <p className={styles.fitness}>GYM NO 2</p>
            <p className={styles.bunch}>Katowice</p>
          </div>
        </div>
      </div>
      {isLOGINPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLOGINPopup}
        >
          <LOGIN onClose={closeLOGINPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default GYM2KATOWICE;
