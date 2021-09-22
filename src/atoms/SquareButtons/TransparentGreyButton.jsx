import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useTransparentGreyBtnStyles = createUseStyles({
  btn: {
    backgroundColor: 'transparent',
    color: Colours.andesite,
    borderColor: Colours.andesite,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.andesite,
      color: Colours.red,
    },
  },
})

const TransparentGreyButton = props => {
  const classes = useTransparentGreyBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default TransparentGreyButton
