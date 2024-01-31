import React from "react";
import styles from "./whatClientSays.module.css";
import clientImage from "../../img/founder-img.png";
const WhatClientSays = () => {
  return (
    <div className={styles.whatClientSays}>
      <div className={styles.whatClientSaysSummary}>
        <h2>What Client Says</h2>
        <p className={styles.whatClientSaysSummaryText}>
          "Our professional leadership team is truly committed to producing the
          best results for our clients very successfully.
        </p>
        <div className={styles.clientInfo}>
          <img src={clientImage} alt="client-image" />
          <div>
            <p>Fidan Mammadova</p>
            <span>CEO of Colorlib</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatClientSays;
