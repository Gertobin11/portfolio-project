import React from "react";
import styles from "../styles/ProgressBar.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ProgressBar = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { name, knowledge } = props;
  console.log(knowledge);

  return (
    <div className={styles["progress-bar-wrapper"]}>
      <div placeholder={name} className={styles["progress-bar"]}>
        <div
          ref={ref}
          style={{
            width: isInView ? `${knowledge}%` : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
          }}
          className={styles["progress-bar-fill"]}
        ></div>
      </div>
      <p>{knowledge}%</p>
    </div>
  );
};

export default ProgressBar;
