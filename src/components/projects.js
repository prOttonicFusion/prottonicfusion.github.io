import React from "react"
import ProjectsMDX from "../sections/projects"
import ProjectCard from "./project-card"
import projectList from "../data/projects.json"
import "../styles/global.scss"

const Projects = () => (
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
      {projectList[0].projects.map((project) => {
        return (
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
        )
      })}
    </div>
  </div>
)

export default Projects
