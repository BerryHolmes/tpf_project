import styles from "./EasyFastContainer.module.css";

const EasyFastContainer = () => {
  return (
    <div className={styles.membershipSections}>
      <div className={styles.membershipBackground} />
      <div className={styles.easyAndFast}>Easy and Fast</div>
      <b className={styles.manageYourMembership}>Manage your membership card</b>
      <div className={styles.membershipInfo}>
        <div className={styles.progress}>
          <img className={styles.progressIcon} alt="" src="../progress.svg" />
          <img className={styles.progressChild} alt="" src="../arrow-1.svg" />
          <div className={styles.loremIpsumDolorContainer}>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur `}</p>
            <p
              className={styles.adipiscingElitUrna}
            >{`adipiscing elit. Urna, tortor tempus. `}</p>
          </div>
          <b className={styles.enjoyAndMake}>Enjoy and make progress</b>
        </div>
        <div className={styles.pickAGym}>
          <b className={styles.pickAGym1}>Pick a gym</b>
          <div className={styles.loremIpsumDolorContainer1}>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur `}</p>
            <p
              className={styles.adipiscingElitUrna}
            >{`adipiscing elit. Urna, tortor tempus. `}</p>
          </div>
          <img className={styles.progressIcon} alt="" src="../progress.svg" />
          <img className={styles.mapsPin} alt="" src="../24--maps--pin.svg" />
        </div>
        <div className={styles.payment}>
          <div className={styles.loremIpsumDolorContainer2}>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur `}</p>
            <p
              className={styles.adipiscingElitUrna}
            >{`adipiscing elit. Urna, tortor tempus. `}</p>
          </div>
          <b className={styles.makePayment}>Make Payment</b>
          <img className={styles.progressIcon} alt="" src="../progress.svg" />
          <img
            className={styles.financeCreditcardAdd}
            alt=""
            src="../24--finance--creditcardadd.svg"
          />
        </div>
      </div>
      <div className={styles.cardFront}>
        <div className={styles.cardFrontChild} />
        <div className={styles.fitnessBunch}>Fitness Bunch</div>
        <div className={styles.johnDoe}>John Doe</div>
        <div className={styles.memberSince110322Container}>
          <p className={styles.loremIpsumDolor}>MEMBER SINCE</p>
          <p className={styles.adipiscingElitUrna}>11/03/22</p>
        </div>
        <img className={styles.cardFrontItem} alt="" src="../line-21.svg" />
        <img className={styles.cardFrontInner} alt="" src="../line-31.svg" />
        <img className={styles.lineIcon} alt="" src="../line-41.svg" />
        <img className={styles.cardFrontChild1} alt="" src="../line-51.svg" />
        <img className={styles.cardFrontChild2} alt="" src="../line-61.svg" />
        <img className={styles.cardFrontChild3} alt="" src="../line-71.svg" />
        <img className={styles.cardFrontChild4} alt="" src="../line-81.svg" />
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
          src="../kod-kreskowy1@2x.png"
        />
        <img className={styles.twitterIcon} alt="" src="../twitter.svg" />
        <div className={styles.comeToOurContainer}>
          <p className={styles.loremIpsumDolor}>
            <span>come to our social media!</span>
          </p>
          <p className={styles.loremIpsumDolor}>
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
  );
};

export default EasyFastContainer;
