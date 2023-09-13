import '../styles/global.scss'
import '../styles/components/skills.scss'
import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import SkillsMDX from '../sections/skills'
import skillsData from '../data/skills.json'

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

    for (const [index, skillCategory] of skillsData.entries()) {
        const obj = {
            name: skillCategory.categoryTitle,
            children: [],
        }

        for (const skill of skillCategory.skills) {
            obj.children.push({
                name: skill.title,
                className: `skills-category-${index}`,
                devIcons: skill.devIcons,
                value: skill.level / 1.1,
            })
        }

        dataSet.push(obj)
    }

    return { children: dataSet }
}

const diameter = 900

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
                .sort((a, b) => b.value - a.value)
        )

        // Place each node according to the layout's x and y values
        const node = svg.append('g')
            .selectAll()
            .data(root.descendants())
            .join('g')
            .attr('transform', (d) => `translate(${d.x},${d.y})`)

        // Add a title
        // node.append('title')
        //     .text((d) => `${d.ancestors().map((d) => d.data.name).reverse().join('/')}`)

        // Add circles to lowest level nodes
        node.filter((d) => !d.children)
            .append('circle')
            .attr('fill', '#ddd')
            .attr('r', (d) => d.r)
            .attr('class', (d) => d.data.className)

        const text = node
            .filter((d) => !d.children && d.r > 10)
            .append('text')
            .attr('clip-path', (d) => `circle(${d.r})`)

        text.append('tspan')
            .attr('x', 0)
            .attr('y', -6)
            .attr('text-anchor', 'middle')
            .text((d) => d.data.name)

        node.filter((d) => !d.children && d.r > 10)
            .append('svg:image')
            .attr('x', -12)
            .attr('y', 8)
            .attr('width', 24)
            .attr('height', 24)
            .attr('xlink:href', (d) => `/assets/devIcons/${d.data.devIcons[0]}.svg`)

        // Delete old elements as needed
        svg.exit().remove()

    }, [skillsData])

    return <svg
        ref={chartRef}
        className="skills-chart"
        viewBox={`0 0 ${diameter} ${diameter}`}
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

