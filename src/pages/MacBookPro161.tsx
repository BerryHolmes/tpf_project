import { FunctionComponent, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import styles from "./MacBookPro161.module.css";

const MacBookPro161: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);

  const onListOfGymsClick = useCallback(() => {
    navigate("/frame-7");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/frame-8");
  }, [navigate]);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  const onDiscoverTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/frame-1");
  }, [navigate]);

  const onRectangleImage4Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangleImage6Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onClassesSectionContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onRectangleButton4Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  const onRectangleButton5Click = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onKnowMoreClick = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  const onKnowMore1Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  const onKnowMore2Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  const onSocialsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.macbookPro161}>
        <img
          className={styles.macbookPro161Child}
          alt=""
          src="../rectangle-188@2x.png"
        />
        <img
          className={styles.macbookPro161Item}
          alt=""
          src="../rectangle-169@2x.png"
          data-scroll-to="rectangleImage"
        />
        <div className={styles.macbookPro161Inner} data-scroll-to="rectangle" />
        <div className={styles.rectangleDiv} />
        <div className={styles.macbookPro161Child1} />
        <div className={styles.macbookPro161Child2} />
        <div className={styles.macbookPro161Child3} />
        <div className={styles.macbookPro161Child4} />
        <div
          className={styles.macbookPro161Child5}
          data-scroll-to="rectangle1"
        />
        <img
          className={styles.brettJordanRkfjhcBf2aUnsplIcon}
          alt=""
          src="../brettjordanrkfjhc-bf2aunsplash-1@2x.png"
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
        <div className={styles.clarityfavoriteLine} />
        <Button
          className={styles.healthiconsuiUserProfileOu}
          variant="outline-warning"
          onClick={openFramePopup}
        >
          Log In
        </Button>
        <div className={styles.youWantToContainer}>
          <p className={styles.youWantTo}>You want to change your life?</p>
          <p className={styles.comeAlong}>Come along!</p>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit
          sem sit amet elit lobortis varius. Vivamus finibus molestie vulputate.
        </div>
        <Button className={styles.rectangleButton} variant="warning">
          ---
        </Button>
        <div className={styles.discover} onClick={onDiscoverTextClick}>
          Discover
        </div>
        <b className={styles.ideaOfOur}>Idea of our website</b>
        <img
          className={styles.pexelsGustavoFring3885490RIcon}
          alt=""
          src="../pexelsgustavofring3885490removebgpreview-1@2x.png"
        />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-1@2x.png" />
        <img
          className={styles.macbookPro161Child6}
          alt=""
          src="../ellipse-2@2x.png"
        />
        <img
          className={styles.macbookPro161Child7}
          alt=""
          src="../ellipse-3@2x.png"
        />
        <img
          className={styles.macbookPro161Child8}
          alt=""
          src="../ellipse-4@2x.png"
        />
        <img
          className={styles.macbookPro161Child9}
          alt=""
          src="../ellipse-9@2x.png"
        />
        <img
          className={styles.macbookPro161Child10}
          alt=""
          src="../ellipse-5@2x.png"
        />
        <img
          className={styles.macbookPro161Child11}
          alt=""
          src="../ellipse-6@2x.png"
        />
        <img
          className={styles.macbookPro161Child12}
          alt=""
          src="../ellipse-7@2x.png"
        />
        <img
          className={styles.macbookPro161Child13}
          alt=""
          src="../ellipse-8@2x.png"
        />
        <img
          className={styles.macbookPro161Child14}
          alt=""
          src="../ellipse-39.svg"
        />
        <img
          className={styles.macbookPro161Child15}
          alt=""
          src="../ellipse-40.svg"
        />
        <img
          className={styles.macbookPro161Child16}
          alt=""
          src="../ellipse-41.svg"
        />
        <img
          className={styles.macbookPro161Child17}
          alt=""
          src="../ellipse-42.svg"
        />
        <img
          className={styles.macbookPro161Child18}
          alt=""
          src="../ellipse-37.svg"
        />
        <img
          className={styles.macbookPro161Child19}
          alt=""
          src="../ellipse-38.svg"
        />
        <img
          className={styles.variousCup}
          alt=""
          src="../24--various--cup.svg"
        />
        <div className={styles.fitnessBunch}>
          <b className={styles.fitnessBunch1}>
            <p className={styles.youWantTo}>FITNESS</p>
            <p className={styles.comeAlong}>BUNCH</p>
          </b>
        </div>
        <div className={styles.ideaAboutWebsite}>
          <img
            className={styles.ideaAboutWebsiteChild}
            alt=""
            src="../ellipse-36.svg"
          />
          <b className={styles.manageYourCarnets}>Manage your carnets</b>
          <b className={styles.listOfThe}>{`List of the gyms `}</b>
          <b className={styles.giveAnOpinion}>Give an opinion</b>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.loremIpsumDolor3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <img
            className={styles.cilpaperPlaneIcon}
            alt=""
            src="../cilpaperplane.svg"
          />
        </div>
        <div className={styles.infoAbNeighbourhood}>
          <b className={styles.addYourNeighbourhood}>
            Add your neighbourhood gym today!
          </b>
          <div className={styles.loremIpsumDolorContainer}>
            <p className={styles.youWantTo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={styles.comeAlong}>
              Cras suscipit sem sit amet elit lobortis varius. Vivamus finibus
              molestie vulputate.
            </p>
          </div>
          <b className={styles.b}>15+</b>
          <b className={styles.k}>5k+</b>
          <b className={styles.b1}>50+</b>
          <b className={styles.k1}>1k+</b>
          <div className={styles.yearsOfExperienceContainer}>
            <p className={styles.youWantTo}>{`Years of `}</p>
            <p className={styles.comeAlong}>Experience</p>
          </div>
          <div className={styles.happyFitnessFreaksContainer}>
            <p className={styles.youWantTo}>{`Happy `}</p>
            <p className={styles.comeAlong}>Fitness Freaks</p>
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
        <div className={styles.top3}>
          <img
            className={styles.top3Child}
            alt=""
            src="../rectangle-12@2x.png"
            onClick={onRectangleImage2Click}
          />
          <img
            className={styles.top3Item}
            alt=""
            src="../rectangle-15@2x.png"
          />
          <img
            className={styles.top3Inner}
            alt=""
            src="../rectangle-12@2x.png"
            onClick={onRectangleImage4Click}
          />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-16@2x.png"
          />
          <img
            className={styles.top3Child1}
            alt=""
            src="../rectangle-12@2x.png"
            onClick={onRectangleImage6Click}
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
            variant="outline-black"
            href="/frame-1"
          >{`>`}</Button>
          <Button
            className={styles.icroundNavigateNext1}
            variant="outline-black"
            href="/frame-2"
          >{`>`}</Button>
          <Button
            className={styles.icroundNavigateNext2}
            variant="outline-black"
            href="/frame-3"
          >{`>`}</Button>
        </div>
        <b className={styles.manageYourMembership}>
          Manage your membership card
        </b>
        <div
          className={styles.classesSection}
          >
          <b className={styles.doWhatBrings}>Do what brings you joy!</b>
          <Button
            className={styles.classesSectionChild}
            variant="dark"
            href="/frame-7"
          >
            TOP 10
          </Button>
          <Button
            className={styles.classesSectionItem}
            variant="dark"
            href="/frame-7"
          >
            Discover More
          </Button>

          
          <Button
            className={styles.classesSectionInner}
            variant="dark"
            href="/frame-4"
            onClick={onRectangleButton3Click}
          >
            Gym Membership
          </Button>
          <Button
            className={styles.classesSectionChild1}
            variant="dark"
            href="/frame-5"
            onClick={onRectangleButton4Click}
          >
            Personal Trainer
          </Button>
          <Button
            className={styles.classesSectionChild2}
            variant="dark"
            href="/frame-6"
            onClick={onRectangleButton5Click}
          >
            Workout Plans
          </Button>
          
          <b className={styles.personalTrainer}>
          </b>
          <img
            className={styles.classesSectionChild3}
            alt=""
            src="../rectangle-25@2x.png"
          />
          <div className={styles.classesSectionChild4} />
          <img
            className={styles.classesSectionChild5}
            alt=""
            src="../rectangle-26@2x.png"
          />
          <div className={styles.classesSectionChild6} />
          <img
            className={styles.classesSectionChild7}
            alt=""
            src="../rectangle-27@2x.png"
          />
          <div className={styles.classesSectionChild8} />
          <b className={styles.yogaClasses}>Yoga Classes</b>
          <b className={styles.calisthenicsCourse}>Calisthenics Course</b>
          <b className={styles.cardio}>Cardio</b>
          <div className={styles.session}>$20 / Session</div>
          <div className={styles.membershipIncluded}>Membership included</div>
          <div className={styles.membershipIncluded1}>
            <p className={styles.youWantTo}>{`Membership `}</p>
            <p className={styles.comeAlong}>included</p>
          </div>
          <div className={styles.loremIpsumDolor5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.loremIpsumDolor6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.loremIpsumDolor7}>
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
        <b className={styles.ourCommunity}>Our community</b>
        <div className={styles.membershipInfo}>
          <b className={styles.pickAGym}>Pick a gym</b>
          <div className={styles.loremIpsumDolorContainer1}>
            <p
              className={styles.youWantTo}
            >{`Lorem ipsum dolor sit amet, consectetur `}</p>
            <p
              className={styles.comeAlong}
            >{`adipiscing elit. Urna, tortor tempus. `}</p>
          </div>
          <div className={styles.value}>
            <div className={styles.loremIpsumDolorContainer2}>
              <p
                className={styles.youWantTo}
              >{`Lorem ipsum dolor sit amet, consectetur `}</p>
              <p
                className={styles.comeAlong}
              >{`adipiscing elit. Urna, tortor tempus. `}</p>
            </div>
            <b className={styles.enjoyAndMake}>Enjoy and make progress</b>
          </div>
          <div className={styles.loremIpsumDolorContainer3}>
            <p
              className={styles.youWantTo}
            >{`Lorem ipsum dolor sit amet, consectetur `}</p>
            <p
              className={styles.comeAlong}
            >{`adipiscing elit. Urna, tortor tempus. `}</p>
          </div>
          <b className={styles.makePayment}>Make Payment</b>
          <img
            className={styles.membershipInfoChild}
            alt=""
            src="../ellipse-43.svg"
          />
          <img
            className={styles.membershipInfoItem}
            alt=""
            src="../ellipse-43.svg"
          />
          <img
            className={styles.membershipInfoInner}
            alt=""
            src="../ellipse-43.svg"
          />
          <img className={styles.mapsPin} alt="" src="../24--maps--pin.svg" />
          <img
            className={styles.basicFlame}
            alt=""
            src="../24--basic--flame.svg"
          />
          <div className={styles.easyAndFast}>Easy and Fast</div>
        </div>
        <div className={styles.emailField}>
          <div className={styles.emailFieldChild} />
          <div className={styles.yourEmail}>Your email</div>
          <div className={styles.vectorParent}>
            <img className={styles.groupChild} alt="" src="../vector-5.svg" />
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <Button className={styles.groupInner} variant="outline-dark" disabled>
            Subscribe
          </Button>
          <div className={styles.subscribeToOur}>
            Subscribe to our newsletter!
          </div>
        </div>
        <div className={styles.tweetAndCommunity}>
          <img className={styles.image22Icon} alt="" src="../image-22@2x.png" />
          <div className={styles.tweetAndCommunityChild} />
          <img
            className={styles.tweetAndCommunityItem}
            alt=""
            src="../ellipse-30@2x.png"
          />
          <div className={styles.loremIpsumDolor11}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </div>
          <img className={styles.image29Icon} alt="" src="../image-29@2x.png" />
          <img className={styles.image30Icon} alt="" src="../image-30@2x.png" />
          <div className={styles.jessicaJonesHijessiContainer}>
            <p className={styles.youWantTo}>
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
        </div>
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
        <img
          className={styles.socialsIcon}
          alt=""
          src="../socials.svg"
          onClick={onSocialsClick}
        />
        <b className={styles.fitnessBunch2}>
          <p className={styles.youWantTo}>FITNESS</p>
          <p className={styles.comeAlong}>BUNCH</p>
        </b>
        <img
          className={styles.financeCreditcardAdd}
          alt=""
          src="../24--finance--creditcardadd.svg"
        />
        <div className={styles.cardFront}>
          <div className={styles.cardFrontChild} />
          <div className={styles.fitnessBunch3}>Fitness Bunch</div>
          <div className={styles.johnDoe}>John Doe</div>
          <div className={styles.memberSince110322Container}>
            <p className={styles.youWantTo}>MEMBER SINCE</p>
            <p className={styles.comeAlong}>11/03/22</p>
          </div>
          <img className={styles.cardFrontItem} alt="" src="../line-2.svg" />
          <img className={styles.cardFrontInner} alt="" src="../line-3.svg" />
          <img className={styles.lineIcon} alt="" src="../line-4.svg" />
          <img className={styles.cardFrontChild1} alt="" src="../line-5.svg" />
          <img className={styles.cardFrontChild2} alt="" src="../line-6.svg" />
          <img className={styles.cardFrontChild3} alt="" src="../line-7.svg" />
          <img className={styles.cardFrontChild4} alt="" src="../line-8.svg" />
        </div>
        <img className={styles.cardBackIcon} alt="" src="../card-back.svg" />
        <img
          className={styles.symbolsFacebook}
          alt=""
          src="../24--symbols--facebook.svg"
        />
        
        <div className={styles.comeToOurContainer}>
          <p className={styles.youWantTo}>
            <span>come to our social media!</span>
          </p>
          <p className={styles.youWantTo}>
            <span>@fitnessbunch</span>
          </p>
          <p className={styles.blankLine}>
            <span>&nbsp;</span>
          </p>
        </div>
        <img
          className={styles.chattingComment}
          alt=""
          src="../24--chatting--comment.svg"
        />
        <img
          className={styles.macbookPro161Child20}
          alt=""
          src="../ellipse-47.svg"
        />
        <img
          className={styles.macbookPro161Child21}
          alt=""
          src="../ellipse-48.svg"
        />
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

export default MacBookPro161;
