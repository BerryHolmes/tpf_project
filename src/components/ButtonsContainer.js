import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/gym-1-krakow");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/gym-2-katowice");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/gym-3-krakow");
  }, [navigate]);

  return (
    <div className={styles.top3} data-scroll-to="top3Container">
      <img
        className={styles.top3Background}
        alt=""
        src="../top-3-background@2x.png"
        data-scroll-to="tOP3Background"
      />
      <div className={styles.top3Child} onClick={onRectangleClick} />
      <img className={styles.top3Item} alt="" src="../rectangle-151@2x.png" />
      <div className={styles.top3Inner} onClick={onRectangle1Click} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-161@2x.png"
      />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <img className={styles.top3Child1} alt="" src="../rectangle-171@2x.png" />
      <b className={styles.gymNo1}>Gym No 1</b>
      <b className={styles.gymNo2}>Gym No 2</b>
      <b className={styles.gymNo3}>Gym No 3</b>
      <div className={styles.krakw}>Kraków</div>
      <div className={styles.katowice}>Katowice</div>
      <div className={styles.katowice1}>Katowice</div>
      <Button
        className={styles.icroundNavigateNext}
        variant="outline-primary"
        href="/gym-1-krakow"
      >{`>`}</Button>
      <Button
        className={styles.icroundNavigateNext1}
        variant="outline-primary"
        href="/gym-2-katowice"
      >{`>`}</Button>
      <Button
        className={styles.icroundNavigateNext2}
        variant="outline-primary"
        href="/gym-3-krakow"
      >{`>`}</Button>
    </div>
  );
};

export default ButtonsContainer;
