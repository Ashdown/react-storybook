import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const DEFAULT_BUTTON_CLASS = 'transparent-grey'

const handleClick = (onClick) => (event) => {
  event.stopPropagation();
  onClick(event);
}

const getClass = data => data.class || DEFAULT_BUTTON_CLASS

const CandyboxActions = ({ buttonData }) => (
  <ul class={`candybox-actions ${buttonData.length % 2 === 0 ? 'has-button-columns' : ''}`}>
    {buttonData.map((data, index) =>
      <li key={index} class={`action-item ${getClass(data).includes('isometric') ? 'has-isometric-button' : ''}`}>
        {data.onClick
          ? <button onClick={handleClick(data.onClick)} className={`square-button ${getClass(data)}`} disabled={data.disabled}>{data.text}</button>
          : <Link to={data.href} className={`square-button ${getClass(data)}`}>{data.text}</Link>
        }
      </li>)}
  </ul>
)

CandyboxActions.propTypes = {
  buttonData: PropTypes.array.isRequired,
}

export default CandyboxActions
