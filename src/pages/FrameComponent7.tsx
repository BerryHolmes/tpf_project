import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  const navigate = useNavigate();

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

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
    <>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="../rectangle-1725@2x.png"
        />
        <Button
          className={styles.healthiconsuiUserProfileOu}
          variant="outline-warning"
          onClick={openFramePopup}
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
        <div className={styles.gymNo3Container}>
          <p className={styles.fitness}>GYM NO 3</p>
          <p className={styles.bunch}>Katowice</p>
        </div>
        <img className={styles.frameItem} alt="" src="../star-1.svg" />
        <img className={styles.frameInner} alt="" src="../star-2.svg" />
        <img className={styles.starIcon} alt="" src="../star-1.svg" />
        <img className={styles.frameChild1} alt="" src="../star-1.svg" />
        <img className={styles.frameChild2} alt="" src="../star-1.svg" />
        <div className={styles.usersOpinion}>
          <p className={styles.fitness}>Users</p>
          <p className={styles.bunch}>opinion</p>
        </div>
        <iframe
          className={styles.mapsFullMap}
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d10245.049813920077!2d19.961856973953914!3d50.06264629708339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47165b721af621ff%3A0xd0c9ea42fc144ab8!2sal.%20Pokoju%2016%2C%2031-564%20Krak%C3%B3w!3m2!1d50.0621577!2d19.968210199999998!5e0!3m2!1spl!2spl!4v1674676880360!5m2!1spl!2spl"
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.localization}>Localization</div>
        <img className={styles.socialsIcon} alt="" src="../socials7.svg" />
        <b className={styles.fitnessBunch2}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
      </div>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent7;
