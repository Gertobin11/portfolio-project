import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "../styles/Cta.module.css";

const Cta = (props) => {
  const { title, location } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <a
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      href={location}
      className={styles["cta"]}
    >
      <p className={styles["hand-drawn"]}>{title}</p>
      <p className={styles["down-arrow"]}>
        <FontAwesomeIcon icon={solid("arrow-down-long")} />
      </p>
    </a>
  );
};

export default Cta;
