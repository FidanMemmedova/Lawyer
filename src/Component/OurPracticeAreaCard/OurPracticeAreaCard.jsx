import React from "react";
import styles from "./ourPracticeAreaCard.module.css";
const OurPracticeAreaCard = ({ image, cardName, cardDescription }) => {
  return (
    <div className={styles.ourPracticeAreaCard}>
      <img src={image} alt="card-logo" />
      <p className={styles.cardName}>{cardName}</p>
      <p className={styles.cardDescription}>{cardDescription}</p>
    </div>
  );
};

export default OurPracticeAreaCard;
