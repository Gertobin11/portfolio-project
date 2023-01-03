import React from "react";
import styles from "../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles["spinner-wrapper"]}>
      <div className={styles.lds}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
