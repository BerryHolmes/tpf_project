import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./GymNo1Container.module.css";

const GymNo1Container = () => {
  const navigate = useNavigate();

  const onRectangleImage1Click = useCallback(() => {
    navigate("/gym-1-krakow");
  }, [navigate]);

  const onRectangleImage3Click = useCallback(() => {
    navigate("/gym-2-katowice");
  }, [navigate]);

  const onRectangleImage5Click = useCallback(() => {
    navigate("/gym-3-krakow");
  }, [navigate]);

  return (
    <div className={styles.top3}>
      <img
        className={styles.top3Child}
        alt=""
        src="../rectangle-12@2x.png"
        onClick={onRectangleImage1Click}
      />
      <img className={styles.top3Item} alt="" src="../rectangle-15@2x.png" />
      <img
        className={styles.top3Inner}
        alt=""
        src="../rectangle-13@2x.png"
        onClick={onRectangleImage3Click}
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
        onClick={onRectangleImage5Click}
      />
      <img className={styles.top3Child2} alt="" src="../rectangle-17@2x.png" />
      <b className={styles.gymNo1}>Gym No 1</b>
      <b className={styles.gymNo2}>Gym No 2</b>
      <b className={styles.gymNo3}>Gym No 3</b>
      <div className={styles.krakw}>Kraków</div>
      <div className={styles.katowice}>Katowice</div>
      <div className={styles.katowice1}>Katowice</div>
      <Button
        className={styles.icroundNavigateNext}
        variant="outline-dark"
        href="/gym-1-krakow"
      >{`>`}</Button>
      <Button
        className={styles.icroundNavigateNext1}
        variant="outline-dark"
        href="/gym-2-katowice"
      >{`>`}</Button>
      <Button
        className={styles.icroundNavigateNext2}
        variant="outline-dark"
        href="/gym-3-krakow"
      >{`>`}</Button>
    </div>
  );
};

export default GymNo1Container;
