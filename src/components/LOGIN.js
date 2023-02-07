import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./LOGIN.module.css";

const LOGIN = ({ onClose }) => {
  return (
    <div className={styles.logIn}>
      <div className={styles.logInChild} />
      <div className={styles.logInItem} />
      <b className={styles.logIn1}>LOG IN</b>
      <Button className={styles.googleLogin} variant="light">
        Button
      </Button>
      <Button className={styles.facebookLogin} variant="light">
        Button
      </Button>
      <img className={styles.pngwing1Icon} alt="" src="../pngwing-1@2x.png" />
      <img className={styles.pngwing2Icon} alt="" src="../pngwing-2@2x.png" />
      <b className={styles.continueWithFacebook}>Continue with Facebook</b>
      <b className={styles.continueWithGoogle}>Continue with Google</b>
    </div>
  );
};

export default LOGIN;
