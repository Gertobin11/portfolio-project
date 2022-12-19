import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/ProjectData";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className={styles["project-section"]}>
      <h3
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.projects}
        id="projects"
      >
        My Projects
      </h3>
      {projectData.map((data) => (
        <ProjectCard
          id={data.id}
          title={data.title}
          image={data.image}
          description={data.description}
          link={data.link}
          key={data.id}
        />
      ))}
    </section>
  );
};

export default Projects;
