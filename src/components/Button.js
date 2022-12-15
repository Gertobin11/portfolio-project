import React from 'react'
import styles from '../styles/Button.module.css'

function Button(props) {
const {location, children} = props;
  return (
    <div className={styles.wrapper}>
        <a className={styles.btn} href={location}>
            {children}
        </a>
    </div>
  );
}

export default Button