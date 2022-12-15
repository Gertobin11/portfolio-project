import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/MainNav.module.css';


function MainNav() {
  return (
    <Navbar className={styles['dark-bg']} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  className={styles.logo} href="#home">Ger Tobin<span className='text-highlight'> | Web Developer </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
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
          <Nav className="ms-auto">
            <Nav.Link className={styles.icons} target="_blank" href="https://www.linkedin.com/in/ger-tobin-566494200/"><FontAwesomeIcon icon={faLinkedinIn} /></Nav.Link>
            <Nav.Link className={styles.icons} target="_blank" href="https://github.com/Gertobin11"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;