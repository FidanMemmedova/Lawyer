import React from "react";
import styles from "./topLawyers.module.css";
import lawyerImage from "../../img/lawyerImage.jpg";
import signature from "../../img/signature.png";
const TopLawyers = () => {
  return (
    <div className={styles.topLawyersContainer}>
      <div className={styles.lawyerImage}>
        <img src={lawyerImage} alt="lawyer" />
        <p className={styles.lawyersExperience}>
          <span> 15 </span>Years of experience
        </p>
      </div>
      <div className={styles.lawyerThoughts}>
        <h2>Why You Need the Top Lawyers in O’Renders</h2>
        <p>
          "Our professional leadership team is truly committed to producing the
          best results for our clients very successfully.
        </p>
        <p className={styles.thoughtText}>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway workplace diversity and
          empowerment.
        </p>
        <p className={styles.lawyerInfo}>
          <span>Reuben Sandwich</span> - CEO of Colorlib
        </p>
        <img src={signature} alt="lawyers-signature" />
      </div>
    </div>
  );
};

export default TopLawyers;
