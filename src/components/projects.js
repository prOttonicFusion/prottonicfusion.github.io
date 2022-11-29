import '../styles/global.scss'
import React from 'react'
import ProjectsMDX from '../sections/projects'
import ProjectCard from './project-card'
import projectList from '../data/projects.json'
import { Carousel } from 'react-bootstrap'

const Projects = () =>
    <div
        className="section-container"
        id="projects"
        style={{
            paddingLeft: 0,
            paddingRight: 0,
        }}
    >
        <ProjectsMDX />

        <div className="project-cards-container">
            {projectList[0].projects.map((project) =>
                <ProjectCard
                    title={project.name}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    wordpress={project.wordpress}
                    documentation={project.documentation}
                    link={project.link}
                    key={project.name}
                    keywords={project.keywords}
                />
            )}
        </div>
        <Carousel
            variant="dark"
            interval={null}
            controls={true}
            indicators={false}
            className="project-cards-container-mobile"
        >
            {projectList[0].projects.map((project) =>
                <Carousel.Item key={project.name}>
                    <ProjectCard
                        title={project.name}
                        description={project.description}
                        image={project.image}
                        github={project.github}
                        wordpress={project.wordpress}
                        documentation={project.documentation}
                        link={project.link}
                        keywords={project.keywords}
                    />
                </Carousel.Item>
            )}
        </Carousel>
    </div>


export default Projects
