import React from "react";
import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";
import { projectData } from "../data/ProjectData";
import styles from "../styles/Projects.module.css";

const Projects = () => {


  return (
    <section className={styles["project-section"]}>
      <Heading title='projects' />
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
