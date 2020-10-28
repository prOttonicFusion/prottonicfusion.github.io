import React from "react"
import ProjectsMDX from "../sections/projects"
import { Grid } from "theme-ui"
import ProjectCard from "./project-card"
import projectList from "../data/projects.json"

const Projects = () => (
    <Grid
        pt={100}
        pb={100}
        columns={[1, 2, 3]}
        id="projects"
        sx={{
            h1: { gridColumn: `-1/1` },
            justifyItems: 'center',
        }}
    >
        <ProjectsMDX />

        {projectList[0].projects.map((project) => {
            return <ProjectCard
                title={project.name}
                description={project.description}
                image={project.image}
                github={project.github}
                wordpress={project.wordpress}
                documentation={project.documentation}
                link={project.link}
            >
            </ProjectCard>
        })}

    </Grid>
)

export default Projects;