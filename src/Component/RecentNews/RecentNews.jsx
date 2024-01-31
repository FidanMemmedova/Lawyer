import React from "react";
import styles from "./recentNews.module.css";
import { RecentNewsCard } from "../RecentNewsCard";
import RecentNewsCardImage from "../../img/recentNewsCardBg.jpg"
const RecentNews = () => {
  return (
    <div className={styles.recentNews}>
      <h2>Recent News</h2>
      <p>
        Bring to the table win-win survival strategies to ensure proactive
        domination. At the end of the day, going forward, a new.
      </p>
      <div className={styles.recentNewsSummary}>
        <RecentNewsCard image={RecentNewsCardImage}/>
        <RecentNewsCard image={RecentNewsCardImage}/>
      </div>
    </div>
  );
};

export default RecentNews;
