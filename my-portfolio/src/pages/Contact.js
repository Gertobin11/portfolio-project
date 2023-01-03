import React from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles["contact-section"]} id="contact">
        <div className={styles['black-overlay']}>
            <Heading title="contact form" />
            <Container>
                <ContactForm />
            </Container>
        </div>
    </section>
  );
};

export default Contact;
