import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import styles from "./SubscriptionForm.module.css";

const SubscriptionForm = () => {
  const onSocialsContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='subscribeBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.subscribe}>
      <div
        className={styles.subscribeBackground}
        data-scroll-to="subscribeBackground"
      />
      <div className={styles.subscribeBox} />
      <img
        className={styles.chattingComment}
        alt=""
        src="../24--chatting--comment.svg"
      />
      <Button className={styles.subscribebutton} variant="light">
        Subscribe
      </Button>
      <img className={styles.subscribeChild} alt="" src="../ellipse-47.svg" />
      <img className={styles.subscribeItem} alt="" src="../ellipse-48.svg" />
     
      <div className={styles.subscribeToOur}>Subscribe to our newsletter!</div>
      <Form.Group className={styles.emailFieldFormgroup}>
        <Form.Control type="text" placeholder="Your email" />
      </Form.Group>
      <div className={styles.socials} onClick={onSocialsContainerClick}>
        <b className={styles.fitnessBunch}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.bunch}>BUNCH</p>
        </b>
      </div>
    </div>
  );
};

export default SubscriptionForm;
