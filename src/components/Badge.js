import React from "react";
import styles from '../styles/Badge.module.css';

const Badge = (props) => {
  const { name, image } = props;
  return (
    <div className={styles.badge}>
      <img src={image} alt={`${name}`} />
      <p>{name}</p>
    </div>
  );
};

export default Badge;
