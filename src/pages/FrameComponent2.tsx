import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
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

  const onAboutUsClick = useCallback(() => {
    navigate("/frame-8");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onRectangleImage3Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangleImage5Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onRectangleImage7Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onRectangleImage8Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangleImage9Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onRectangleImage10Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onRectangleImage11Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangleImage12Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onRectangleImage13Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  return (
    <>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="../rectangle-1721@2x.png"
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
          <div className={styles.listOfGyms}>{`List of Gyms `}</div>
          <div className={styles.aboutUs} onClick={onAboutUsClick}>
            About us
          </div>
        </div>
        <div className={styles.top10}>TOP 10</div>
        <img className={styles.socialsIcon} alt="" src="../socials2.svg" />
        <b className={styles.fitnessBunch2}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
        <div className={styles.top3}>
          <img
            className={styles.top3Child}
            alt=""
            src="../rectangle-121@2x.png"
          />
          <img
            className={styles.top3Item}
            alt=""
            src="../rectangle-151@2x.png"
          />
          <img
            className={styles.top3Inner}
            alt=""
            src="../rectangle-131@2x.png"
          />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-161@2x.png"
          />
          <img
            className={styles.top3Child1}
            alt=""
            src="../rectangle-141@2x.png"
          />
          <img
            className={styles.top3Child2}
            alt=""
            src="../rectangle-171@2x.png"
          />
          <b className={styles.gymNo1}>Gym No 1</b>
          <b className={styles.gymNo2}>Gym No 2</b>
          <b className={styles.gymNo3}>Gym No 3</b>
          <div className={styles.krakw}>Kraków</div>
          <div className={styles.katowice}>Katowice</div>
          <div className={styles.katowice1}>Katowice</div>
          <Button
            className={styles.icroundNavigateNext}
            variant="outline-dark"
            href="/frame-1"
          >{`>`}</Button>
          <Button
            className={styles.icroundNavigateNext1}
            variant="outline-dark"
            href="/frame-2"
          >{`>`}</Button>
          <Button
            className={styles.icroundNavigateNext2}
            variant="outline-dark"
            href="/frame-3"
          >{`>`}</Button>
        </div>
        <div className={styles.top46}>
          <img
            className={styles.top46Child}
            alt=""
            src="../rectangle-122@2x.png"
         
          />
          <img
            className={styles.top46Item}
            alt=""
            src="../rectangle-132@2x.png"
          
          />
          <img
            className={styles.top46Inner}
            alt=""
            src="../rectangle-142@2x.png"
           
          />
          <b className={styles.gymNo4}>Gym No 4</b>
          <b className={styles.gymNo5}>Gym No 5</b>
          <b className={styles.gymNo6Container}>
            <p className={styles.fitness}>Gym No 6</p>
          </b>
          <div className={styles.krakw1}>Kraków</div>
          <div className={styles.katowice2}>Katowice</div>
          <div className={styles.katowice3}>Katowice</div>
          </div>
        <div className={styles.top79}>
          <img
            className={styles.top46Child}
            alt=""
            src="../rectangle-122@2x.png"
           
          />
          <img
            className={styles.top46Item}
            alt=""
            src="../rectangle-132@2x.png"
           />
          <img
            className={styles.top46Inner}
            alt=""
            src="../rectangle-142@2x.png"
          />
          <b className={styles.gymNo4}>Gym No 7</b>
          <b className={styles.gymNo5}>Gym No 8</b>
          <b className={styles.gymNo6Container}>
          <p className={styles.fitness}>Gym No 9</p>
          </b>
          <div className={styles.krakw1}>Kraków</div>
          <div className={styles.katowice2}>Katowice</div>
          <div className={styles.katowice3}>Katowice</div>
          
        </div>
        <div className={styles.top101}>
          <img
            className={styles.top10Child}
            alt=""
            src="../rectangle-124@2x.png"
          />
          <b className={styles.gymNo10}>Gym No 10</b>
          <div className={styles.krakw3}>Kraków</div>
          
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

export default FrameComponent2;
