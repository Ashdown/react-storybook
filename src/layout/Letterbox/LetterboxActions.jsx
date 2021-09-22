import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const LetterboxActions = ({ buttonData }) => (
  <ul class={`letterbox-actions ${buttonData.length % 2 === 0 ? 'has-button-columns' : ''}`}>
    {buttonData.map((data, index) =>
      <li key={index} class={`action-item ${data.class.includes('isometric') ? 'has-isometric-button' : ''}`}>
        {data.onClick
          ? <button onClick={data.onClick} className={`square-button ${data.class}`} disabled={data.disabled}>{data.text}</button>
          : <Link to={data.href} className={`square-button ${data.class}`}>{data.text}</Link>
        }
      </li>)}
  </ul>
)

LetterboxActions.propTypes = {
  buttonData: PropTypes.array.isRequired,
}

export default LetterboxActions
