import '../styles/skills.scss'
import React from 'react'
import * as d3 from 'd3'
import useD3 from '../hooks/useD3'
// import data from '../data/skills.json'

const data = [
    { source: 'Item 1', x: 100, y: 60, val: 1350, color: '#C9D6DF' },
    { source: 'Item 2', x: 30, y: 80, val: 2500, color: '#F7EECF' },
    { source: 'Item 3', x: 50, y: 40, val: 5700, color: '#E3E1B2' },
    { source: 'Item 4', x: 190, y: 100, val: 30000, color: '#F9CAC8' },
    { source: 'Item 5', x: 80, y: 170, val: 47500, color: '#D1C2E0' },
]

const BubbleChartSvg = ({ data }) => {
    const ref = useD3(
        (svg) => {
            svg.selectAll('circle')
                .data(data).enter()
                .append('circle')
                .attr('cx', (d) => {return d.x})
                .attr('cy', (d) => {return d.y})
                .attr('r', (d) => {
                    return Math.sqrt(d.val)/Math.PI
                })
                .attr('fill', (d) => {
                    return d.color
                })
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
        <BubbleChartSvg data={data} />
    )
}

export default SkillsChart
