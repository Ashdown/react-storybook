import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useRedWhiteBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.red,
    color: Colours.white,
    borderColor: Colours.white,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.white,
      color: Colours.red,
    },
  },
})

const RedWhiteButton = props => {
  const classes = useRedWhiteBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default RedWhiteButton
