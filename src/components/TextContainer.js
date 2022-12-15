import React from "react";
import styles from "../styles/TextContainer.module.css";
import Button from "./Button";

const TextContainer = (props) => {
  const { title, content, cta, children } = props;
  return (
    <div className={styles["text-container"]}>
      <h3>{title}</h3>
      <p>{content}</p>
      {cta ? <Button location={cta} children={children} /> : <p></p>}
    </div>
  );
};

export default TextContainer;
