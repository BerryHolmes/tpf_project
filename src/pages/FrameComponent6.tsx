import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
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
          src="../rectangle-1724@2x.png"
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
        <div className={styles.gymMembership}>Gym membership</div>
        <img className={styles.socialsIcon} alt="" src="../socials6.svg" />
        <b className={styles.fitnessBunch2}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
        <div className={styles.cardFront}>
          <div className={styles.cardFrontChild} />
          <div className={styles.fitnessBunch3}>Fitness Bunch</div>
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.memberSince110322Container}>
            <p className={styles.fitness}>MEMBER SINCE</p>
            <p className={styles.bunch}>11/03/22</p>
          </div>
          <img className={styles.cardFrontItem} alt="" src="../line-2.svg" />
          <img className={styles.cardFrontInner} alt="" src="../line-3.svg" />
          <img className={styles.lineIcon} alt="" src="../line-4.svg" />
          <img className={styles.cardFrontChild1} alt="" src="../line-5.svg" />
          <img className={styles.cardFrontChild2} alt="" src="../line-6.svg" />
          <img className={styles.cardFrontChild3} alt="" src="../line-7.svg" />
          <img className={styles.cardFrontChild4} alt="" src="../line-8.svg" />
        </div>
        <div className={styles.frameItem} />
        <div className={styles.comeToOurContainer}>
          <p className={styles.fitness}>
            <span>come to our social media!</span>
          </p>
          <p className={styles.fitness}>
            <span>@fitnessbunch</span>
          </p>
          <p className={styles.blankLine}>
            <span>&nbsp;</span>
          </p>
        </div>
        <img
          className={styles.symbolsInstagram}
          alt=""
          src="../24--symbols--instagram.svg"
        />
        <img className={styles.ean1281Icon} alt="" src="../ean128-1@2x.png" />
        <img
          className={styles.symbolsFacebook}
          alt=""
          src="../24--symbols--facebook1.svg"
        />
        <div className={styles.frameInner} />
        <div className={styles.lineDiv} />
        <div className={styles.frameChild1} />
        <b className={styles.normal}>Normal</b>
        <b className={styles.medium}>Medium</b>
        <b className={styles.premium}>Premium</b>
        <b className={styles.z}>29.99zł</b>
        <b className={styles.z1}>39.99zł</b>
        <b className={styles.z2}>49.99 zł</b>
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

export default FrameComponent6;
