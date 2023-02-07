import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

type FrameComponentType = {
  onClose?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({ onClose }) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <b className={styles.logIn}>LOG IN</b>
      <div className={styles.frameInner} />
      <div className={styles.rectangleDiv} />
      <b className={styles.continueWithFacebook}>Continue with Facebook</b>
      <b className={styles.continueWithGoogle}>Continue with Google</b>
      <img className={styles.pngwing1Icon} alt="" src="../pngwing-1@2x.png" />
      <img className={styles.pngwing2Icon} alt="" src="../pngwing-2@2x.png" />
    </div>
  );
};

export default FrameComponent;
