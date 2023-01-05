import React from "react";
import styles from "../styles/About.module.css";
import TextContainer from "../components/TextContainer";
import Cta from "../components/Cta";

const About = () => {
  const title = "Ger Tobin | Web Developer";
  const content =
    "I am a Full Stack Web Developer based in Tralee County Kerry, Ireland. I am adept at using HTML5, CSS, JavaScript and Python. I am proficient at using jQuery, Bootstrap, Flask and Django frameworks. I have experience with SQL and NoSQL databases.If you are an employer wishing to  hire me or another web developer looking to collaborateyou can simply go to my ";
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
        <div className={styles['skills-layout']}>
          <Cta location='#skills' title='Check Out My Skills' />
        </div>
        <div className={styles['contact-layout']}>
          <Cta location='#contact' title='Contact Me Here' />
        </div>
      </div>
    </section>
  );
};

export default About;