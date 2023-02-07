import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LOGIN from "../components/LOGIN";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./ABOUTUS.module.css";

const ABOUTUS = () => {
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

  return (
    <>
      <div className={styles.aboutUs}>
        <b className={styles.fitnessBunch}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
        <img
          className={styles.aboutUsImg}
          alt=""
          src="../about-us-img@2x.png"
        />
        <div className={styles.aboutUsBackground} />
        <div
          className={styles.aboutUsText}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero nisl, accumsan ut ultrices at, ultricies vel est. Maecenas vitae imperdiet ligula, eu volutpat eros. Nunc accumsan quis lacus et hendrerit. Praesent a commodo eros. Morbi quis scelerisque augue, nec porta mauris. Duis quis porttitor nulla. Pellentesque euismod dolor sed libero aliquam congue quis nec dolor. Vivamus vitae commodo mauris, nec tempor erat. `}</div>
        <div className={styles.aboutUs1}>About us</div>
        <div className={styles.navMenu}>
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
            <div className={styles.aboutUs2}>About us</div>
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

export default ABOUTUS;
