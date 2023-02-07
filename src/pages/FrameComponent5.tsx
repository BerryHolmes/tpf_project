import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
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
          src="../rectangle-1723@2x.png"
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
        <div className={styles.personalTrainers}>
          <p className={styles.fitness}>{`Personal `}</p>
          <p className={styles.bunch}>Trainers</p>
        </div>
        <img className={styles.socialsIcon} alt="" src="../socials5.svg" />
        <b className={styles.fitnessBunch2}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
        <img className={styles.frameItem} alt="" src="../ellipse-49@2x.png" />
        <div className={styles.frameInner} />
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          ligula libero, sed molestie nibh posuere at. Nam consequat condimentum
          bibendum. Cras ac mattis leo. Proin vulputate mattis nisl. Donec et
          lacus elit. Suspendisse ante massa, dictum in eros in, dignissim
          mattis ipsum.
        </div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-50@2x.png" />
        <div className={styles.rectangleDiv} />
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          ligula libero, sed molestie nibh posuere at. Nam consequat condimentum
          bibendum. Cras ac mattis leo. Proin vulputate mattis nisl. Donec et
          lacus elit. Suspendisse ante massa, dictum in eros in, dignissim
          mattis ipsum.
        </div>
        <img className={styles.frameChild1} alt="" src="../ellipse-51@2x.png" />
        <div className={styles.frameChild2} />
        <div className={styles.loremIpsumDolor2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          ligula libero, sed molestie nibh posuere at. Nam consequat condimentum
          bibendum. Cras ac mattis leo. Proin vulputate mattis nisl. Donec et
          lacus elit. Suspendisse ante massa, dictum in eros in, dignissim
          mattis ipsum.
        </div>
        <img className={styles.frameChild3} alt="" src="../ellipse-52@2x.png" />
        <div className={styles.frameChild4} />
        <div className={styles.loremIpsumDolor3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          ligula libero, sed molestie nibh posuere at. Nam consequat condimentum
          bibendum. Cras ac mattis leo. Proin vulputate mattis nisl. Donec et
          lacus elit. Suspendisse ante massa, dictum in eros in, dignissim
          mattis ipsum.
        </div>
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

export default FrameComponent5;
