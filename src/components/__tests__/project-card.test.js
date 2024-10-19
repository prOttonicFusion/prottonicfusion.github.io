import React from 'react'
import { describe, expect, it, jest } from '@jest/globals'
import { render } from '@testing-library/react'
import Card from '../project-card'

describe('Project card', () => {
    it('renders card correctly with GitHub icon', () => {
        const { container } = render(
            <Card
                title="Some title"
                description="My GitHub project"
                github="github-user/github-repo.git"
                image="/path/to/the/image.png"

            />,
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
