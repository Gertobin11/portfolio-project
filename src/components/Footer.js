import React from "react";
import styles from "../styles/Footer.module.css";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles['footer-logo']}>Ger Tobin | Web Developer</p>
      </div>
      <div>
          <Nav className={`${styles.socials} ms-auto`}>
            <Nav.Link
              className={styles.icons}
              target="_blank"
              href="https://www.linkedin.com/in/ger-tobin-566494200/"
              aria-label="Linkedin"
            >
              <FontAwesomeIcon icon={brands("linkedin-in")} />
            </Nav.Link>
            <Nav.Link
              className={styles.icons}
              target="_blank"
              href="https://github.com/Gertobin11"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={brands("github")} />
            </Nav.Link>
            <Nav.Link className={styles.icons} target="_blank" href="mailto:gertobindev@gmail.com" aria-label="Email"><FontAwesomeIcon icon={solid('envelope')} /></Nav.Link>
          </Nav>
      </div>
      <div>
      <Navbar>
        <Nav className={styles["footer-nav"]}>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link eventKey={2} href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link eventKey={3} href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link eventKey={4} href="#contact">
            Contact
          </Nav.Link>
        </Nav>
        </Navbar>
      </div>
    </footer>
  );
};

export default Footer;
