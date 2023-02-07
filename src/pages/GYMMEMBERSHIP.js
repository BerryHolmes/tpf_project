import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LOGIN from "../components/LOGIN";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./GYMMEMBERSHIP.module.css";

const GYMMEMBERSHIP = () => {
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
      <div className={styles.gymMembership}>
        <div className={styles.socials}>
          <b className={styles.fitnessBunch}>
            <p className={styles.fitness}>FITNESS</p>
            <p className={styles.bunch}>BUNCH</p>
          </b>
        </div>
        <div className={styles.cardFront}>
          <div className={styles.cardFrontChild} />
          <div className={styles.fitnessBunch1}>Fitness Bunch</div>
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
        <div className={styles.cardBack}>
          <div className={styles.cardBack1} />
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
          <img
            className={styles.kodKreskowyIcon}
            alt=""
            src="../kod-kreskowy@2x.png"
          />
          <img
            className={styles.symbolsFacebook}
            alt=""
            src="../24--symbols--facebook.svg"
          />
          <img className={styles.icon} alt="" src="../icon.svg" />
        </div>
        <div className={styles.prices}>
          <div className={styles.pricesChild} />
          <div className={styles.pricesItem} />
          <div className={styles.pricesInner} />
          <b className={styles.normal}>Normal</b>
          <b className={styles.medium}>Medium</b>
          <b className={styles.premium}>Premium</b>
          <b className={styles.z}>29.99zł</b>
          <b className={styles.z1}>39.99zł</b>
          <b className={styles.z2}>49.99 zł</b>
        </div>
        <div className={styles.gymMembership1}>
          <img
            className={styles.gymMembershipBackground}
            alt=""
            src="../gym-membership-background@2x.png"
          />
          <Button
            className={styles.healthiconsuiUserProfileOu}
            variant="outline-warning"
            onClick={openLOGINPopup}
          >
            Log In
          </Button>
          <div className={styles.fitnessBunch2}>
            <b className={styles.fitnessBunch3}>
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
          <div className={styles.gymMembership2}>Gym membership</div>
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

export default GYMMEMBERSHIP;
