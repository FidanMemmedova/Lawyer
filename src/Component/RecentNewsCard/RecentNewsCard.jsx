import React from "react";
import styles from "./recentNewsCard.module.css";

const RecentNewsCard = ({ image, text }) => {
  return (
    <div className={styles.recentNewsCard}>
      <img src={image} alt="recent-news-card-image" />
    </div>
  );
};

export default RecentNewsCard;
