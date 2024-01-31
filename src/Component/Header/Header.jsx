import React from "react";
import styles from "./header.module.css";
import { Navbar } from "../Navbar";
import { Logo } from "../Logo";
import { LearnMoreBtn } from "../Buttons/LearnMoreBtn";
import { ContactUs } from "../ContactUs";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <Navbar />
      <LearnMoreBtn
        text="Make An Appointment"
        bgColor="white"
        color="#B40000"
        border="1px solid #B40000"
      />
      <ContactUs numberColor="#B40000" textColor="#2D0000"/>
    </div>
  );
};

export default Header;
