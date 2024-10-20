import '../styles/global.scss'
import '../styles/components/skills.scss'
import React from 'react'
import SkillsMDX from '../../content/sections/skills'
import skillsData from '../../content/data/skills.json'
import DevIcon from './icons/dev-icon'

const SkillItem = ({ name, devIcons, level, url }) =>
    <div className="skill-item">
        <div className="skill-description-container">
            {url
                ? <a href={url} className="skill-title">{name}</a>
                : <span className="skill-title">{name}</span>
            }
            <span className="skill-badge-container">
                {devIcons.map((tool) =>
                    <DevIcon tool={tool} key={tool} />,
                )}
            </span>
        </div>
    </div>

const SkillCategory = ({ skills, title }) =>
    <div className={'skill-category'}>
        <div className="skill-category-title">{title}</div>
        <div className="category-skills-container">
            {skills.map((skill) =>
                <SkillItem
                    name={skill.title}
                    level={skill.level}
                    devIcons={skill.devIcons}
                    key={skill.title}
                    url={skill.url}
                />,
            )}
        </div>
    </div>

const Skills = () =>
    <div id="skills">
        <div>
            <SkillsMDX />
        </div>
        <div className="skills-container">
            {skillsData.map((category) =>
                <SkillCategory
                    title={category.categoryTitle}
                    skills={category.skills}
                    key={category.categoryTitle}
                />,
            )}
        </div>
    </div>


export default Skills
