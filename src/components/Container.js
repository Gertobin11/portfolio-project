import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "../styles/Container.module.css";

const Container = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ?'none' : 'translateY(200px)',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={styles.container}
    >
      {children}
    </div>
  );
};

export default Container;
