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
        {Object.keys(SkillsData).map((key, index) => (
            <Container id={key} key={index}>
                <h3 className={styles.title}>{key.toUpperCase()}</h3>
                {SkillsData[key].map((skill, index) => (
                    <Badge key={index} name={skill.name} image={skill.image} knowledge={skill.knowledge}/>
                ))}
            </Container>
        ))}
    </section>
  )
}

export default Skills