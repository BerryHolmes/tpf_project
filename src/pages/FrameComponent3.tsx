import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
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

  return (
    <>
      <div className={styles.healthiconsuiUserProfileOuParent}>
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
          <div className={styles.aboutUs}>About us</div>
        </div>
        <div className={styles.aboutUs1}>About us</div>
        <img className={styles.frameChild} alt="" src="../ellipse-53@2x.png" />
        <div className={styles.frameItem} />
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum libero nisl, accumsan ut ultrices at, ultricies vel est. Maecenas vitae imperdiet ligula, eu volutpat eros. Nunc accumsan quis lacus et hendrerit. Praesent a commodo eros. Morbi quis scelerisque augue, nec porta mauris. Duis quis porttitor nulla. Pellentesque euismod dolor sed libero aliquam congue quis nec dolor. Vivamus vitae commodo mauris, nec tempor erat. `}</div>
        <img className={styles.socialsIcon} alt="" src="../socials3.svg" />
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

export default FrameComponent3;
