import React from "react";
import styles from "./ourPracticeArea.module.css";
import OurPracticeAreaCard from "../OurPracticeAreaCard/OurPracticeAreaCard";
import ourPracticeAreaIcon1 from "../../img/ourPracticeAreaIcon1.svg";
import ourPracticeAreaIcon2 from "../../img/ourPracticeAreaIcon2.svg";
import ourPracticeAreaIcon3 from "../../img/ourPracticeAreaIcon3.svg";
import ourPracticeAreaIcon4 from "../../img/ourPracticeAreaIcon4.svg";
import { Form } from "../../Pages/Home/component/Form";
const OurPracticeArea = () => {
  return (
    <div className={styles.ourPracticeArea}>
      <div className={styles.container}>
        <h2>Our Practice Area</h2>
        <div className={styles.ourPracticeAreaSummary}>
          <div className={styles.ourPracticeAreaSummaryText}>
            <OurPracticeAreaCard
              image={ourPracticeAreaIcon1}
              cardName="Family Law"
              cardDescription="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward."
            />
            <OurPracticeAreaCard
              image={ourPracticeAreaIcon3}
              cardName="Corporate Law"
              cardDescription="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward."
            />
            <OurPracticeAreaCard
              image={ourPracticeAreaIcon4}
              cardName="Acidental Law"
              cardDescription="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward."
            />
            <OurPracticeAreaCard
              image={ourPracticeAreaIcon4}
              cardName="Finance Law"
              cardDescription="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward."
            />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default OurPracticeArea;
