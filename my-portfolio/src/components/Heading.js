import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from '../styles/Heading.module.css';

const Heading = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const { title } = props


  return (
    <h3
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.heading}
        id={title}
      >
        My {title.toUpperCase()}
      </h3>
  )
}

export default Heading