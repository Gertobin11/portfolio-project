import React from "react";
import styles from "../styles/About.module.css";
import TextContainer from "../components/TextContainer";
import Cta from "../components/Cta";
import { about } from "../data/AboutData";

const About = () => {
  const title = "Ger Tobin | Web Developer";
  const content = about;


  return (
    <section className={styles.about} id="about">
      <div className={styles["black-overlay"]}>
        <div className={styles["about-text"]}>
          <TextContainer
            title={title}
            content={content}
            cta="#projects"
            children="My Projects"
          />
        </div>
        <div className={styles["skills-layout"]}>
          <Cta location="#skills" title="Check Out My Skills" />
        </div>
        <div className={styles["contact-layout"]}>
          <Cta location="#contact" title="Contact Me Here" />
        </div>
      </div>
    </section>
  );
};

export default About;
