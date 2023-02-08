import styles from "./TweetContainer.module.css";

const TweetContainer = () => {
  return (
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
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </div>
      <img className={styles.slide2Icon} alt="" src="../slide2@2x.png" />
      <img className={styles.slide1Icon} alt="" src="../slide1@2x.png" />
      <div className={styles.jessicaJonesHijessiContainer}>
        <p className={styles.jessicaJones}>
          <span>Jessica Jones</span>
        </p>
        <p className={styles.hijessi}>
          <span>@hijessi</span>
        </p>
      </div>
      <div className={styles.twitterForAndroidContainer}>
        <span>{`9:20  7/03/22 `}</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.twitterForAndroid}>Twitter for Android</span>
      </div>
      <b className={styles.ourCommunity}>Our community</b>
    </div>
  );
};

export default TweetContainer;
