import React from "react";
import ProgressBar from "./ProgressBar";
import styles from '../styles/Badge.module.css';

const Badge = (props) => {
  const { name, image, knowledge } = props;

  return (
    <div className={styles.badge}>
      <img src={image} alt={`${name}`} />
      <p>{name}</p>
      <ProgressBar title={name} knowledge={knowledge}/>
    </div>
  );
};

export default Badge;
