import React from 'react'
import PropTypes from 'prop-types'

const SquareTab =({ isSelected, children, hash, onClick, type, colour }) => (
  <li
    class={`square-tab ${isSelected ? 'selected' : 'non-selected'} ${type}-type`}
    onClick={onClick}
  >
    <a
      class={`square-button white-${colour}`}
      href={`#${hash}`}
    >
      {children}
    </a>
  </li>
)

SquareTab.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  hash: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
}

export default SquareTab
