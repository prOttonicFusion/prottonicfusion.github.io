import React from 'react'
import { describe, expect, it } from '@jest/globals'
import { render } from '@testing-library/react'
import { withQuerySnapshot } from 'gatsby-plugin-testing'
import Footer from '../footer'

describe('Page footer', () => {
    it('renders footer correctly', withQuerySnapshot(() => {
        const { container } = render(
            <Footer/>,
        )
        expect(container.firstChild).toMatchSnapshot()
    }))
})
