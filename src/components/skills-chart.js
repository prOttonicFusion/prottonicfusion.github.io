import '../styles/skills.scss'
import React from 'react'
import useD3 from '../hooks/useD3'
// import data from '../data/skills.json'

const data = {
    categoryTitle: 'Languages',
    x: 80, y: 170, val: 47500, color: '#D1C2E0',
    skills: [
        { title: 'JavaScript', x: 100, y: 60, val: 1350, color: '#C9D6DF' },
        { title: 'Python', x: 30, y: 80, val: 2500, color: '#F7EECF' },
        { title: 'C++', x: 50, y: 40, val: 5700, color: '#E3E1B2' },
        { title: 'Fortran', x: 190, y: 100, val: 30000, color: '#F9CAC8' },
    ],
}

const CategoryChart = ({ data }) => {
    const ref = useD3(
        (svg) => {
            // Create and place the blocks containing a circle and text
            const block = svg.selectAll('g circleText')
                .data(data.skills).enter()
                .append('g')
                .attr('transform', (d) => `translate(${d.x},${d.y})`)

            // Create the circle for each block
            block.append('circle')
                // .attr('cx', (d) => d.x)
                // .attr('cy', (d) => d.y)
                .attr('r', (d) => Math.sqrt(d.val)/Math.PI)
                .attr('fill', (d) => d.color)

            // Create the text for each block
            block.append('text')
                .attr('text-anchor', 'middle')
                .text((d)=> d.title)

            // Repeat for category label
            const mainBlock = svg.append('g')
                .attr('transform', `translate(${data.x},${data.y})`)

            mainBlock.append('circle')
                .attr('r', Math.sqrt(data.val)/Math.PI)
                .attr('fill', data.color)

            mainBlock.append('text')
                .attr('text-anchor', 'middle')
                .text(data.categoryTitle)
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
