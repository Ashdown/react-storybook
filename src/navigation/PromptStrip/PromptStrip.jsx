import React from 'react'
import {PageFrame} from '../../layout/'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

const ButtonContainer = ({ text, url, hash = false, isIsometric = false, colour, isDisabled = false, onClick = () => {}, onDisabledClick }) => {
  const isometricClass = colour === 'red' ? 'isometric white' : 'isometric red-invert'
  const buttonClass = (() => `square-button ${isIsometric ? isometricClass : 'transparent-white'} ${isDisabled ? 'disabled' : ''}`)()

  return <li class="button-container">
    {isDisabled ?
      <button class={buttonClass} onClick={onDisabledClick}>{text}</button> :
      hash ?
        <a class={buttonClass} href={`#${hash}`}>{text}</a> :
        <Link class={buttonClass} onClick={onClick} to={url}>{text}</Link>
    }
  </li>
}

const PromptStrip = ({ colour = 'red', buttonData, onDisabledClick = () => {} }) => (
  <div class={`prompt-strip ${colour}`}>
    <PageFrame colour={colour}>
      <ul>
        {buttonData.map((buttonData, index) =>
          <ButtonContainer
            key={index}
            colour={colour}
            onDisabledClick={onDisabledClick}
            {...buttonData}
          />)}
      </ul>
    </PageFrame>
  </div>
)

PromptStrip.propTypes = {
  colour: PropTypes.string,
  buttonData: PropTypes.array.isRequired,
}

export default PromptStrip
