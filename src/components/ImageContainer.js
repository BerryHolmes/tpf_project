import styles from "./ImageContainer.module.css";

const ImageContainer = ({ carImageUrl }) => {
  return (
    <div className={styles.trainer}>
      <img className={styles.trainerChild} alt="" src={carImageUrl} />
      <div className={styles.trainerItem} />
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
        ligula libero, sed molestie nibh posuere at. Nam consequat condimentum
        bibendum. Cras ac mattis leo. Proin vulputate mattis nisl. Donec et
        lacus elit. Suspendisse ante massa, dictum in eros in, dignissim mattis
        ipsum.
      </div>
    </div>
  );
};

export default ImageContainer;
