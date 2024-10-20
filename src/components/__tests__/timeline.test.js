import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, jest } from '@jest/globals'
import Timeline from '../timeline'

jest.mock('../../../content/sections/timeline.mdx', () => {
    return {
        __esModule: true,
        default: () => {
            return <div>Some content</div>
        },
    }
})

describe('Timeline', () => {
    it('renders timeline correctly', () => {
        const { container } = render(
            <Timeline />,
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
