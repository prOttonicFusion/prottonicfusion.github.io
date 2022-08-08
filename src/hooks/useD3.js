import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const useD3 = (renderSvg, dependencies) => {
    const ref = useRef()

    useEffect(() => {
        renderSvg(d3.select(ref.current))

        return () => {}

    }, dependencies)

    return ref
}

export default useD3
