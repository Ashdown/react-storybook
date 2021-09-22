import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useTransparentWhiteBtnStyles = createUseStyles({
  btn: {
    backgroundColor: 'transparent',
    color: Colours.white,
    borderColor: 'transparent',
    '&:hover:not([disabled])': {
      color: Colours.red,
      backgroundColor: Colours.white,
    },
  },
})

const TransparentWhiteButton = props => {
  const classes = useTransparentWhiteBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default TransparentWhiteButton
