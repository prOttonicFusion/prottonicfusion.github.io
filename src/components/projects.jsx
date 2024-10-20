import '../styles/global.scss'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import ProjectsMDX from '../../content/sections/projects'
import ProjectCard from './project-card'
import projectList from '../../content/data/projects.json'
import Carousel from 'react-multi-carousel'

const responsive = {
    desktop: {
      breakpoint: { min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
}

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
            arrows={true}
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            transitionDuration={500}
            ssr={false}
            containerClass="project-cards-container-mobile"
        >
            {projectList[0].projects.map((project) =>
                <ProjectCard
                    key={project.name}
                    title={project.name}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    wordpress={project.wordpress}
                    documentation={project.documentation}
                    link={project.link}
                    keywords={project.keywords}
                />
            )}
        </Carousel>
    </div>


export default Projects
