import React from "react";
import styles from "./heroSection.module.css";
import { LearnMoreBtn } from "../Buttons/LearnMoreBtn";
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionSummary}>
        <h1>Special Approach Dedicated Attorney</h1>
        <p>
          Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum
          dolore egru lofrre dsu.
        </p>
        <LearnMoreBtn
          text="Our Practice Area"
          bgColor="#B40000"
          color="white"
          border="none"
          padding="20px 25px"
          width="fit-content"
        />
      </div>
    </div>
  );
};

export default HeroSection;
