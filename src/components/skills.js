import '../styles/global.scss'
import '../styles/components/skills.scss'
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import SkillsMDX from '../sections/skills'
import skillsData from '../data/skills.json'
import DevIcon from './dev-icon'

// const SkillItem = ({ name, devIcons, level }) =>
//     <div className="skill-item">
//         <div className="skill-description-container">
//             <span className="skill-title">{name}</span>
//             <span className="skill-badge-container">
//                 {devIcons.map((tool) =>
//                     <DevIcon tool={tool} key={tool} />,
//                 )}
//             </span>
//         </div>
//         <div className="progress-bar">
//             <span className="progress" style={{ width: `${level}%` }}></span>
//         </div>
//     </div>

const processData = (skillsData) => {
    const dataSet = []

    for (const skillCategory in skillsData) {
        const obj = {
            name: skillCategory.categoryTitle,
            children: [],
        }

        for (const skill in skillCategory.skills) {
            obj.push({
                name: skill.title,
                // className: prop.toLowerCase(),
                value: skill.level,
            })
        }

        dataSet.push(obj)
    }

    return { children: dataSet }
}

const diameter = 500

const SkillCategory = ({ skillsData }) => {
    const chartRef = useRef(null)

    useEffect(() => {
        if (!skillsData || !chartRef.current) {
            return
        }

        const svg = d3.select(chartRef.current)

        const pack = d3.pack()
            .size([diameter, diameter])
            .padding(3)
            .radius((d) => d.value)

        const root = pack(
            d3.hierarchy(processData(skillsData))
                .sum((d) => d.value)
                //.filter((d) => !d.children) // drop outer circle
        )

        // Place each node according to the layout's x and y values
        const node = svg.append('g')
            .selectAll()
            .data(root.descendants())
            .join('g')
            .attr('transform', (d) => `translate(${d.x},${d.y})`)

        // Add a title
        node.append('title')
            .text((d) => `${d.ancestors().map((d) => d.data.name).reverse().join('/')}`)

        // Add a filled or stroked circle
        node.append('circle')
            .attr('fill', (d) => d.children ? '#fff' : '#ddd')
            .attr('stroke', (d) => d.children ? '#bbb' : null)
            .attr('r', (d) => d.r)

        // Delete old elements as needed
        // update.exit().remove()

    }, [skillsData])

    return <svg
        ref={chartRef}
        width={diameter}
        height={diameter}
    />
}
/**
<div className={'skill-category'}>
<div className="skill-category-title">{title}</div>
<div className="category-skills-container">
{skills.map((skill) =>
    <SkillItem
    name={skill.title}
    level={skill.level}
    devIcons={skill.devIcons}
    key={skill.title}
    />,
    )}
    </div>
    </div>
*/

const Skills = () =>
    <div id="skills">
        <div>
            <SkillsMDX />
        </div>
        <SkillCategory
            skillsData={skillsData}
        />
    </div>


export default Skills

