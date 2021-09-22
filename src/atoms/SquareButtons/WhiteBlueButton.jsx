import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useWhiteBlueBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.white,
    color: Colours.blue,
    borderColor: Colours.blue,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.blue,
      color: Colours.white,
    },
  },
})

const WhiteBlueButton = props => {
  const classes = useWhiteBlueBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default WhiteBlueButton
