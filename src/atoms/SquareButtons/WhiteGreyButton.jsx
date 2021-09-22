import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useWhiteGreyBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.white,
    color: Colours.andesite,
    borderColor: Colours.andesite,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.andesite,
      color: Colours.white,
    },
  },
})

const WhiteGreyButton = props => {
  const classes = useWhiteGreyBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default WhiteGreyButton
