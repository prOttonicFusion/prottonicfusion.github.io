import '../styles/skills.scss'
import React from 'react'
import useD3 from '../hooks/useD3'
import { iconsByName } from './dev-icon'
// import data from '../data/skills.json'

const data = {
    categoryTitle: 'Languages',
    x: 80, y: 170, val: 47500, color: '#D1C2E0',
    skills: [
        { title: 'JavaScript', val: 1350, color: '#C9D6DF', devIcons: ['python'] },
        { title: 'Python', val: 2500, color: '#F7EECF', devIcons: ['python'] },
        { title: 'C++', val: 5700, color: '#E3E1B2', devIcons: ['python'] },
        { title: 'Fortran', val: 30000, color: '#F9CAC8', devIcons: ['python']  },
    ],
}

const getCoordsByAngle = (angleRad, radius, shiftX=0, shiftY=0) => ({
    x: shiftX + radius * Math.cos(angleRad),
    y: shiftY + radius * Math.sin(angleRad),
})

const CategoryChart = ({ data }) => {
    const w = 200
    const h = 200
    const mainRadius = Math.sqrt(data.val)/Math.PI
    const itemCount = data.skills.length

    const skillItems = data.skills.map((skill, i) => {
        const radius = Math.sqrt(skill.val)/Math.PI
        const angle = 2 * Math.PI / itemCount * i
        const { x, y } = getCoordsByAngle(angle, radius + mainRadius, w, h)
        return { ...skill, x, y, radius }
    })

    const ref = useD3(
        (svg) => {
            // Create and place the block containing a circle and text
            const mainBlock = svg.append('g')
                .attr('transform', `translate(${w},${h})`)

            const block = svg.selectAll('g circleText')
                .data(skillItems).enter()
                .append('g')
                .attr('transform', (d) => `translate(${d.x},${d.y})`)

            // Create the circle for block
            mainBlock.append('circle')
                .attr('r', mainRadius)
                .attr('fill', data.color)

            block.append('circle')
                // .attr('cx', (d) => d.x)
                // .attr('cy', (d) => d.y)
                .attr('r', (d) => Math.sqrt(d.val)/Math.PI)
                .attr('fill', (d) => d.color)

            // Create the text for each block
            mainBlock.append('text')
                .attr('text-anchor', 'middle')
                .text(data.categoryTitle)

            block.append('text')
                .attr('text-anchor', 'middle')
                .text((d)=> d.title)

            // Add additional icons
            block.append('svg:image')
                .attr('href', (d) => iconsByName[d.devIcons[0]].icon)
                .attr('x', -12)
                .attr('height', 24)
                .attr('width', 24)


        },
        [data.length],
    )

    return (
        <svg
            ref={ref}
            style={{
                height: 500,
                width: '100%',
                marginRight: '0px',
                marginLeft: '0px',
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    )
}

const SkillsChart = () => {
    return (
        <CategoryChart data={data} />
    )
}

export default SkillsChart
