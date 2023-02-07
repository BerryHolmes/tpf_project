import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LOGIN from "../components/LOGIN";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PERSONALTRAINERS.module.css";

const PERSONALTRAINERS = () => {
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
      <div className={styles.personalTrainers}>
        <div className={styles.socials}>
          <b className={styles.fitnessBunch}>
            <p className={styles.fitness}>FITNESS</p>
            <p className={styles.bunch}>BUNCH</p>
          </b>
        </div>
        <div className={styles.trainer}>
          <img
            className={styles.trainerChild}
            alt=""
            src="../ellipse-51@2x.png"
          />
          <div className={styles.trainerItem} />
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            ligula libero, sed molestie nibh posuere at. Nam consequat
            condimentum bibendum. Cras ac mattis leo. Proin vulputate mattis
            nisl. Donec et lacus elit. Suspendisse ante massa, dictum in eros
            in, dignissim mattis ipsum.
          </div>
        </div>
        <div className={styles.trainer1}>
          <img
            className={styles.trainerChild}
            alt=""
            src="../ellipse-52@2x.png"
          />
          <div className={styles.trainerItem} />
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            ligula libero, sed molestie nibh posuere at. Nam consequat
            condimentum bibendum. Cras ac mattis leo. Proin vulputate mattis
            nisl. Donec et lacus elit. Suspendisse ante massa, dictum in eros
            in, dignissim mattis ipsum.
          </div>
        </div>
        <div className={styles.trainer2}>
          <img
            className={styles.trainerChild}
            alt=""
            src="../ellipse-50@2x.png"
          />
          <div className={styles.trainerItem} />
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            ligula libero, sed molestie nibh posuere at. Nam consequat
            condimentum bibendum. Cras ac mattis leo. Proin vulputate mattis
            nisl. Donec et lacus elit. Suspendisse ante massa, dictum in eros
            in, dignissim mattis ipsum.
          </div>
        </div>
        <div className={styles.trainersMain}>
          <img
            className={styles.trainersBackgroundIcon}
            alt=""
            src="../trainers-background@2x.png"
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
          <div className={styles.personalTrainers1}>
            <p className={styles.fitness}>{`Personal `}</p>
            <p className={styles.bunch}>Trainers</p>
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

export default PERSONALTRAINERS;
