import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, NavLink } from 'react-bootstrap'
import styles from '../styles/ProjectCard.module.css'

const ProjectCard = (props) => {
  const {title, link, image, description, id} = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Card ref={ref}
    style={{
      transform: isInView ? "none" : id % 2 === 0 ? "translateX(200px)" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }} className={styles.card}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      <NavLink target='_blank' href={link}>Visit Live Website </NavLink>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard