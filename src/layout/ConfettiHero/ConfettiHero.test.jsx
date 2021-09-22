import React from 'react'
import { render } from 'react-testing-library'

import ConfettiHero from './ConfettiHero'

describe('ConfettiHero', () => {
  it('renders content and defaults to red', () => {
    const { container } = render(<ConfettiHero>Test Content</ConfettiHero>)
    expect(container.firstChild).toHaveClass('red')
    expect(container).toHaveTextContent('Test Content')
  })

  it('sets colour class to blue when defined', () => {
    const { container } = render(<ConfettiHero colour="blue"/>)
    expect(container.firstChild).toHaveClass('blue')
  })
})
