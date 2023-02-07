import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LOGIN from "../components/LOGIN";
import PortalPopup from "../components/PortalPopup";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLOGINPopupOpen, setLOGINPopupOpen] = useState(false);

  const onSocialsContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='subscribeBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onClassesSectionContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='communityBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDiscoverMoreClick = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onWorkoutPlansClick = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onPersonalTrainerClick = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onGymMembershipClick = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onGymMembership1Click = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onKnowMoreClick = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onKnowMore1Click = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onKnowMore2Click = useCallback(() => {
    navigate("/personal-trainers");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onListOfGymsClick = useCallback(() => {
    navigate("/top-10");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const openLOGINPopup = useCallback(() => {
    setLOGINPopupOpen(true);
  }, []);

  const closeLOGINPopup = useCallback(() => {
    setLOGINPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.homePage}>
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
            Button
          </Button>
          <img
            className={styles.subscribeChild}
            alt=""
            src="../ellipse-47.svg"
          />
          <img
            className={styles.subscribeItem}
            alt=""
            src="../ellipse-48.svg"
          />
          <div className={styles.subscribe1}>Subscribe</div>
          <div className={styles.subscribeToOur}>
            Subscribe to our newsletter!
          </div>
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
        <div className={styles.tweetAndCommunity}>
          <div
            className={styles.communityBackground}
            data-scroll-to="communityBackground"
          />
          <img
            className={styles.tweetBackgroundIcon}
            alt=""
            src="../tweet-background@2x.png"
          />
          <div className={styles.tweet} />
          <img className={styles.avatarIcon} alt="" src="../avatar@2x.png" />
          <div className={styles.textOfTweet}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </div>
          <img className={styles.slide2Icon} alt="" src="../slide2@2x.png" />
          <img className={styles.slide1Icon} alt="" src="../slide1@2x.png" />
          <div className={styles.jessicaJonesHijessiContainer}>
            <p className={styles.fitness}>
              <span>Jessica Jones</span>
            </p>
            <p className={styles.hijessi}>
              <span>@hijessi</span>
            </p>
          </div>
          <div className={styles.twitterForAndroidContainer}>
            <span>{`9:20  7/03/22 `}</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.twitterForAndroid}>
              Twitter for Android
            </span>
          </div>
          <b className={styles.ourCommunity}>Our community</b>
        </div>
        <div
          className={styles.classesSection}
          onClick={onClassesSectionContainerClick}
        >
          <div className={styles.doWhatBringsJoyBackground} />
          <b className={styles.doWhatBrings}>Do what brings you joy!</b>
          <Button
            className={styles.discoverMore}
            variant="light"
            onClick={onDiscoverMoreClick}
          >
            Dicover more
          </Button>
          <Button
            className={styles.workoutPlans}
            variant="outline-primary"
            href="/workout-plans"
            onClick={onWorkoutPlansClick}
          >
            Workout Plans
          </Button>
          <Button
            className={styles.personalTrainer}
            variant="outline-primary"
            href="/personal-trainers"
            onClick={onPersonalTrainerClick}
          >
            Personal Trainer
          </Button>
          <Button
            className={styles.gymMembership}
            variant="outline-primary"
            href="/gym-membership"
            onClick={onGymMembershipClick}
          >
            Gym Membership
          </Button>
          <Button
            className={styles.gymMembership1}
            variant="outline-primary"
            href="/top-10"
            onClick={onGymMembership1Click}
          >
            TOP 10
          </Button>
          <b className={styles.top10}>TOP 10</b>
          <b className={styles.discoverMore1}>Discover More</b>
          <b className={styles.gymMembership2}>
            <p className={styles.fitness}>{`Gym `}</p>
            <p className={styles.bunch}>Membership</p>
          </b>
          <b className={styles.personalTrainer1}>
            <p className={styles.fitness}>{`Personal `}</p>
            <p className={styles.bunch}>Trainer</p>
          </b>
          <b className={styles.workoutPlans1}>
            <p className={styles.fitness}>{`Workout `}</p>
            <p className={styles.bunch}>Plans</p>
          </b>
          <img className={styles.yogaImgIcon} alt="" src="../yoga-img@2x.png" />
          <div className={styles.yogaRec} />
          <img
            className={styles.calistheImgIcon}
            alt=""
            src="../calisthe-img@2x.png"
          />
          <div className={styles.calistheRec} />
          <img
            className={styles.cardioRectaIcon}
            alt=""
            src="../cardio-recta@2x.png"
          />
          <div className={styles.cardioRec} />
          <b className={styles.yogaClasses}>Yoga Classes</b>
          <b className={styles.calisthenicsCourse}>Calisthenics Course</b>
          <b className={styles.cardio}>Cardio</b>
          <div className={styles.session}>$20 / Session</div>
          <div className={styles.membershipIncluded}>Membership included</div>
          <div className={styles.membershipIncluded1}>
            <p className={styles.fitness}>{`Membership `}</p>
            <p className={styles.bunch}>included</p>
          </div>
          <div className={styles.textYoga}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.textCalisthe}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.textCardio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.knowMore} onClick={onKnowMoreClick}>
            Know More
          </div>
          <div className={styles.knowMore1} onClick={onKnowMore1Click}>
            Know More
          </div>
          <div className={styles.knowMore2} onClick={onKnowMore2Click}>
            Know More
          </div>
        </div>
        <div className={styles.top3} data-scroll-to="top3Container">
          <img
            className={styles.top3Background}
            alt=""
            src="../top-3-background@2x.png"
            data-scroll-to="tOP3Background"
          />
          <div className={styles.top3Child} onClick={onRectangleClick} />
          <img
            className={styles.top3Item}
            alt=""
            src="../rectangle-151@2x.png"
          />
          <div className={styles.top3Inner} onClick={onRectangle1Click} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-161@2x.png"
          />
          <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
          <img
            className={styles.top3Child1}
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
        <div className={styles.infoAbNeighbourhood}>
          <img
            className={styles.addYourGymBackground}
            alt=""
            src="../add-your-gym-background@2x.png"
          />
          <img className={styles.opinionsIcon} alt="" src="../opinions.svg" />
          <img className={styles.gymsIcon} alt="" src="../gyms.svg" />
          <img
            className={styles.fitnesFreaksIcon}
            alt=""
            src="../fitnes-freaks.svg"
          />
          <img className={styles.expIcon} alt="" src="../exp.svg" />
          <b className={styles.addYourNeighbourhood}>
            Add your neighbourhood gym today!
          </b>
          <div className={styles.loremIpsumDolorContainer}>
            <p className={styles.fitness}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={styles.bunch}>
              Cras suscipit sem sit amet elit lobortis varius. Vivamus finibus
              molestie vulputate.
            </p>
          </div>
          <b className={styles.b}>15+</b>
          <b className={styles.k}>5k+</b>
          <b className={styles.b1}>50+</b>
          <b className={styles.k1}>1k+</b>
          <div className={styles.yearsOfExperienceContainer}>
            <p className={styles.fitness}>{`Years of `}</p>
            <p className={styles.bunch}>Experience</p>
          </div>
          <div className={styles.happyFitnessFreaksContainer}>
            <p className={styles.fitness}>{`Happy `}</p>
            <p className={styles.bunch}>Fitness Freaks</p>
          </div>
          <div className={styles.addedGyms}>Added gyms</div>
          <div className={styles.opinions}>Opinions</div>
          <img
            className={styles.simpleLineIconscalender}
            alt=""
            src="../simplelineiconscalender.svg"
          />
          <img
            className={styles.antDesignbarChartOutlinedIcon}
            alt=""
            src="../antdesignbarchartoutlined.svg"
          />
          <img className={styles.carbonmapIcon} alt="" src="../carbonmap.svg" />
          <img
            className={styles.gridiconshistory}
            alt=""
            src="../gridiconshistory.svg"
          />
        </div>
        <div className={styles.ideaAboutWebsite}>
          <div className={styles.ideaOfWebsiteBackground} />
          <div className={styles.giveOpinion}>
            <img
              className={styles.giveOpinionChild}
              alt=""
              src="../ellipse-37.svg"
            />
            <b className={styles.giveAnOpinion}>Give an opinion</b>
            <div className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <img className={styles.planeIcon} alt="" src="../plane.svg" />
          </div>
          <div className={styles.manageCarnets}>
            <img
              className={styles.giveOpinionChild}
              alt=""
              src="../ellipse-36.svg"
            />
            <b className={styles.manageYourCarnets}>Manage your carnets</b>
            <div className={styles.loremIpsumDolor2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
          </div>
          <div className={styles.listOfTheGyms}>
            <img
              className={styles.listOfTheGymsChild}
              alt=""
              src="../ellipse-38.svg"
            />
            <b className={styles.listOfThe}>{`List of the gyms `}</b>
            <div className={styles.loremIpsumDolor3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <img
              className={styles.variousCup}
              alt=""
              src="../24--various--cup.svg"
            />
          </div>
          <b className={styles.ideaOfOur}>Idea of our website</b>
        </div>
        <div className={styles.first}>
          <img
            className={styles.mainBackgroundIcon}
            alt=""
            src="../main-background@2x.png"
          />
          <div className={styles.menus}>
            <div className={styles.home}>Home</div>
            <div
              className={styles.listOfGyms}
              onClick={onListOfGymsClick}
            >{`List of Gyms `}</div>
            <div className={styles.aboutUs} onClick={onAboutUsClick}>
              About us
            </div>
          </div>
          <Button
            className={styles.avatarIconLogin}
            variant="outline-warning"
            onClick={openLOGINPopup}
          >
            Log In
          </Button>
          <div className={styles.youWantToContainer}>
            <p className={styles.fitness}>You want to change your life?</p>
            <p className={styles.bunch}>Come along!</p>
          </div>
          <div className={styles.loremIpsumDolor4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            suscipit sem sit amet elit lobortis varius. Vivamus finibus molestie
            vulputate.
          </div>
          <Button className={styles.discoverButton} variant="warning">
            Discover
          </Button>
          <div className={styles.fitnessBunch1}>
            <b className={styles.fitnessBunch2}>
              <p className={styles.fitness}>FITNESS</p>
              <p className={styles.bunch}>BUNCH</p>
            </b>
          </div>
        </div>
        <div className={styles.membershipSections}>
          <div className={styles.membershipBackground} />
          <div className={styles.easyAndFast}>Easy and Fast</div>
          <b className={styles.manageYourMembership}>
            Manage your membership card
          </b>
          <div className={styles.membershipInfo}>
            <div className={styles.pickAGym}>
              <b className={styles.pickAGym1}>Pick a gym</b>
              <div className={styles.loremIpsumDolorContainer1}>
                <p
                  className={styles.fitness}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p
                  className={styles.bunch}
                >{`adipiscing elit. Urna, tortor tempus. `}</p>
              </div>
              <img
                className={styles.progressIcon}
                alt=""
                src="../pick-a-gym.svg"
              />
              <img
                className={styles.mapsPin}
                alt=""
                src="../24--maps--pin.svg"
              />
            </div>
            <div className={styles.progress}>
              <img
                className={styles.progressIcon}
                alt=""
                src="../pick-a-gym.svg"
              />
              <img
                className={styles.progressChild}
                alt=""
                src="../arrow-1.svg"
              />
              <div className={styles.loremIpsumDolorContainer2}>
                <p
                  className={styles.fitness}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p
                  className={styles.bunch}
                >{`adipiscing elit. Urna, tortor tempus. `}</p>
              </div>
              <b className={styles.enjoyAndMake}>Enjoy and make progress</b>
            </div>
            <div className={styles.payment}>
              <div className={styles.loremIpsumDolorContainer3}>
                <p
                  className={styles.fitness}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p
                  className={styles.bunch}
                >{`adipiscing elit. Urna, tortor tempus. `}</p>
              </div>
              <b className={styles.makePayment}>Make Payment</b>
              <img
                className={styles.progressIcon}
                alt=""
                src="../pick-a-gym.svg"
              />
              <img
                className={styles.financeCreditcardAdd}
                alt=""
                src="../24--finance--creditcardadd.svg"
              />
            </div>
          </div>
          <div className={styles.cardFront}>
            <div className={styles.cardFrontChild} />
            <div className={styles.fitnessBunch3}>Fitness Bunch</div>
            <div className={styles.johnDoe}>John Doe</div>
            <div className={styles.memberSince110322Container}>
              <p className={styles.fitness}>MEMBER SINCE</p>
              <p className={styles.bunch}>11/03/22</p>
            </div>
            <img className={styles.cardFrontItem} alt="" src="../line-2.svg" />
            <img className={styles.cardFrontInner} alt="" src="../line-3.svg" />
            <img className={styles.lineIcon} alt="" src="../line-4.svg" />
            <img
              className={styles.cardFrontChild1}
              alt=""
              src="../line-5.svg"
            />
            <img
              className={styles.cardFrontChild2}
              alt=""
              src="../line-6.svg"
            />
            <img
              className={styles.cardFrontChild3}
              alt=""
              src="../line-7.svg"
            />
            <img
              className={styles.cardFrontChild4}
              alt=""
              src="../line-8.svg"
            />
          </div>
          <div className={styles.cardBack}>
            <div className={styles.cardBackChild} />
            <img
              className={styles.symbolsInstagram}
              alt=""
              src="../24--symbols--instagram1.svg"
            />
            <img
              className={styles.kodKreskowyIcon}
              alt=""
              src="../kod-kreskowy@2x.png"
            />
            <img className={styles.twitterIcon} alt="" src="../twitter.svg" />
            <div className={styles.comeToOurContainer}>
              <p className={styles.fitness}>
                <span>come to our social media!</span>
              </p>
              <p className={styles.fitness}>
                <span>@fitnessbunch</span>
              </p>
              <p className={styles.blankLine}>
                <span>&nbsp;</span>
              </p>
            </div>
            <img
              className={styles.symbolsFacebook}
              alt=""
              src="../24--symbols--facebook1.svg"
            />
          </div>
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

export default HomePage;
