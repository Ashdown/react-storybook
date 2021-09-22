import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useWhiteWhiteBlueBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.white,
    color: Colours.blue,
    borderColor: Colours.white,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.pumice,
      color: Colours.blue,
    },
  },
})

const WhiteWhiteBlueButton = props => {
  const classes = useWhiteWhiteBlueBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default WhiteWhiteBlueButton
