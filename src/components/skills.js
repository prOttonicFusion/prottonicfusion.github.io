import React from "react"
import SkillsMDX from "../sections/skills"
import skillsData from "../data/skills.json"
import devIcon from "./dev-icon"
import "../styles/global.scss"
import "../styles/skills.scss"
import DevIcon from "./dev-icon"

const SkillItem = (props) => {
  const { name, devIcons, level } = props
  return (
    <div className="skill-item">
      <div className="skill-description-container">
        <span className="skill-title">{name}</span>
        <span className="skill-badge-container">
          {devIcons.map((tool) => (
            <DevIcon tool={tool} />
          ))}
        </span>
      </div>
      <div className="progress-bar">
        <span className="progress" style={{ width: `${level}%` }}></span>
      </div>
    </div>
  )
}

const SkillCategory = ({ skills, title }) => {
  return (
    <div className={"skill-category"}>
      <div className="skill-category-title">{title}</div>
      <div className="category-skills-container">
        {skills.map((skill) => (
          <SkillItem
            name={skill.title}
            level={skill.level}
            devIcons={skill.devIcons}
            key={skill.title}
          />
        ))}
      </div>
    </div>
  )
}

const Skills = () => (
  <div style={{ padding: "30px 4px" }} id="skills">
    <div>
      <SkillsMDX />
    </div>
    <div className="skills-container">
      {skillsData.map((category) => (
        <SkillCategory
          title={category.categoryTitle}
          skills={category.skills}
          key={category.categoryTitle}
        />
      ))}
    </div>
  </div>
)

export default Skills
