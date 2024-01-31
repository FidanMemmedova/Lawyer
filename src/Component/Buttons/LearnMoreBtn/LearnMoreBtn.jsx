import React from "react";
import styles from "./learnMoreBtn.module.css";

const LearnMoreBtn = ({ width,text, bgColor, color, border, padding }) => {
  return (
    <button
      style={{
        width:width,
        padding: padding,
        backgroundColor: bgColor,
        color: color,
        border: border,
      }}
    >
      {text}
    </button>
  );
};

export default LearnMoreBtn;
