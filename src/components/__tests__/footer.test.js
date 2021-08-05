import React from 'react'
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
