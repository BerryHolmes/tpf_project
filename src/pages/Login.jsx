import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import { Button } from "react-bootstrap";
import styles from "../components/LOGIN.module.css";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (

    
    
     <div className={styles.logIn}>
      <div className={styles.logInChild} />
      <div className={styles.logInItem} />
      <b className={styles.logIn1}>LOG IN</b>
      <Button className={styles.googleLogin} variant="warning">
      <div className="loginButton google" onClick={google}>
           
            Google
          </div>

        
      </Button>
      <Button className={styles.facebookLogin} variant="warning">
      <div className="loginButton facebook" onClick={facebook}>
          
            Facebook
          </div>
      </Button>
      <img className={styles.pngwing1Icon} alt="" src="../pngwing-1@2x.png" />
      <img className={styles.pngwing2Icon} alt="" src="../pngwing-2@2x.png" />
    
    </div>
  );
};

export default Login;
