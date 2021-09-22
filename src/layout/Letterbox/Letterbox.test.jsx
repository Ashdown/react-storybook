import React from 'react'
import { render } from 'react-testing-library'

import Letterbox from './Letterbox'

describe('Letterbox', () => {
  it('renders content and adds a custom class', () => {
    const { container } = render(<Letterbox classname="custom">
      <div>Test Content</div>
    </Letterbox>)
    expect(container).toHaveTextContent('Test Content')
    expect(container.firstChild).toHaveClass('custom')
  })
})
