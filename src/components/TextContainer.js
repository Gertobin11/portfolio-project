import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "../styles/TextContainer.module.css";
import Button from "./Button";
import Typewriter from "typewriter-effect";

const TextContainer = (props) => {
  const { title, content, cta, children } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={styles["text-container"]}
    >
      <h3>{title}</h3>
        {isInView ? (
          <Typewriter
          options={{delay: 50,
            cursorClassName: `${styles.cursor}`}}
            onInit={(typewriter) => {
              typewriter.typeString(content).start();
            }}
          />
        ) : <div></div>}
      {cta ? <Button location={cta} children={children} /> : <p></p>}
    </div>
  );
};

export default TextContainer;
