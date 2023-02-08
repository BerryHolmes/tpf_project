import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LOGIN from "../components/LOGIN";
import PortalPopup from "../components/PortalPopup";
import styles from "./LifeChangerContainer.module.css";

const LifeChangerContainer = () => {
  const navigate = useNavigate();
  const [isLOGINPopupOpen, setLOGINPopupOpen] = useState(false);

  const onListOfGymsClick = useCallback(() => {
    navigate("/top-10");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const openLOGINPopup = useCallback(() => {
    setLOGINPopupOpen(true);
  }, []);

  const closeLOGINPopup = useCallback(() => {
    setLOGINPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.first}>
        <img
          className={styles.mainBackgroundIcon}
          alt=""
          src="../main-background@2x.png"
        />
        <div className={styles.youWantToContainer}>
          <p className={styles.youWantTo}>You want to change your life?</p>
          <p className={styles.comeAlong}>Come along!</p>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit
          sem sit amet elit lobortis varius. Vivamus finibus molestie vulputate.
        </div>
        <Button className={styles.discoverButton} variant="warning">
          Discover
        </Button>
        <div className={styles.fitnessBunchParent}>
          <div className={styles.fitnessBunch}>
            <b className={styles.fitnessBunch1}>
              <p className={styles.youWantTo}>FITNESS</p>
              <p className={styles.comeAlong}>BUNCH</p>
            </b>
          </div>
          <div className={styles.menusParent}>
            <div className={styles.menus}>
              <div className={styles.home}>Home</div>
              <div
                className={styles.listOfGyms}
                onClick={onListOfGymsClick}
              >{`List of Gyms `}</div>
              <div className={styles.aboutUs} onClick={onAboutUsClick}>
                About us
              </div>
            </div>
            <Button
              className={styles.avatarIconLogin}
              variant="outline-warning"
              onClick={openLOGINPopup}
            >
              Log In
            </Button>
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

export default LifeChangerContainer;
