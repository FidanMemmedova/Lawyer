import React from "react";
import styles from "./whyChooseUse.module.css";
import { LearnMoreBtn } from "../Buttons/LearnMoreBtn";
const WhyChooseUse = () => {
  return (
    <div className={styles.whyChooseUse}>
      <h2>Why Choose Us?</h2>
      <p>
        "Our professional leadership team is truly committed to producing the
        best results for our clients very successfully..
      </p>
      <p className={styles.whyChooseUseText}>
        Bring to the table win-win survival strategies to ensure proactive
        domination. At the end of the day, going forward, a new normal that has
        evolved from generation.
      </p>
      <LearnMoreBtn
        text="Learn More"
        bgColor="#B40000"
        border="none"
        color="white"
        padding="18px 30px"
      />
    </div>
  );
};

export default WhyChooseUse;
