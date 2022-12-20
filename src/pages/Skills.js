import React from 'react'
import { SkillsData } from '../data/SkillData'
import Heading from '../components/Heading'
import Container from '../components/Container.js'
import Badge from '../components/Badge'
import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <section id='skills' className={styles['skills-section']}>
        <Heading title='skills' />
        {Object.values(SkillsData).map((skills, index) => (
            <Container key={index}>
                {skills.map((skill, index) => (
                    <Badge key={index} name={skill.name} image={skill.image} />
                ))}
            </Container>
        ))}
    </section>
  )
}

export default Skills