import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LOGIN from "../components/LOGIN";
import PortalPopup from "../components/PortalPopup";
import styles from "./TOP10.module.css";

const TOP10 = () => {
  const navigate = useNavigate();
  const [isLOGINPopupOpen, setLOGINPopupOpen] = useState(false);

  const onRectangleImageClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangleImage4Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onRectangleImage6Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onRectangleImage7Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangleImage8Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onRectangleImage9Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onRectangleImage10Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangleImage11Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onRectangleImage12Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const openLOGINPopup = useCallback(() => {
    setLOGINPopupOpen(true);
  }, []);

  const closeLOGINPopup = useCallback(() => {
    setLOGINPopupOpen(false);
  }, []);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <>
      <div className={styles.top10}>
        <div className={styles.socials}>
          <b className={styles.fitnessBunch}>
            <p className={styles.fitness}>FITNESS</p>
            <p className={styles.bunch}>BUNCH</p>
          </b>
        </div>
        <div className={styles.top3}>
          <img
            className={styles.top3Child}
            alt=""
            src="../rectangle-12@2x.png"
            onClick={onRectangleImageClick}
          />
          <img
            className={styles.top3Item}
            alt=""
            src="../rectangle-15@2x.png"
          />
          <img
            className={styles.top3Inner}
            alt=""
            src="../rectangle-13@2x.png"
            onClick={onRectangleImage2Click}
          />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-16@2x.png"
          />
          <img
            className={styles.top3Child1}
            alt=""
            src="../rectangle-14@2x.png"
            onClick={onRectangleImage4Click}
          />
          <img
            className={styles.top3Child2}
            alt=""
            src="../rectangle-17@2x.png"
          />
          <b className={styles.gymNo1}>Gym No 1</b>
          <b className={styles.gymNo2}>Gym No 2</b>
          <b className={styles.gymNo3}>Gym No 3</b>
          <div className={styles.krakw}>Kraków</div>
          <div className={styles.katowice}>Katowice</div>
          <div className={styles.katowice1}>Katowice</div>
          <Button
            className={styles.icroundNavigateNext}
            variant="outline-primary"
            href="/frame-1"
          >{`>`}</Button>
          <Button
            className={styles.icroundNavigateNext1}
            variant="outline-primary"
            href="/frame-2"
          >{`>`}</Button>
          <Button
            className={styles.icroundNavigateNext2}
            variant="outline-primary"
            href="/frame-3"
          >{`>`}</Button>
        </div>
        <div className={styles.top46}>
          <img
            className={styles.top46Child}
            alt=""
            src="../rectangle-121@2x.png"
            onClick={onRectangleImage6Click}
          />
          <img
            className={styles.top46Item}
            alt=""
            src="../rectangle-131@2x.png"
            onClick={onRectangleImage7Click}
          />
          <img
            className={styles.top46Inner}
            alt=""
            src="../rectangle-141@2x.png"
            onClick={onRectangleImage8Click}
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
            src="../rectangle-121@2x.png"
            onClick={onRectangleImage9Click}
          />
          <img
            className={styles.top46Item}
            alt=""
            src="../rectangle-131@2x.png"
            onClick={onRectangleImage10Click}
          />
          <img
            className={styles.top46Inner}
            alt=""
            src="../rectangle-141@2x.png"
            onClick={onRectangleImage11Click}
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
            src="../rectangle-123@2x.png"
            onClick={onRectangleImage12Click}
          />
          <b className={styles.gymNo10}>Gym No 10</b>
          <div className={styles.krakw3}>Kraków</div>
        </div>
        <div className={styles.top10Main}>
          <img
            className={styles.top10MainChild}
            alt=""
            src="../rectangle-172@2x.png"
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
            <div className={styles.listOfGyms}>{`List of Gyms `}</div>
            <div className={styles.aboutUs} onClick={onAboutUsClick}>
              About us
            </div>
          </div>
          <div className={styles.top102}>TOP 10</div>
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

export default TOP10;
