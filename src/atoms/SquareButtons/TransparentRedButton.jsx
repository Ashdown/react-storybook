import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useTransparentRedBtnStyles = createUseStyles({
  btn: {
    backgroundColor: 'transparent',
    color: Colours.red,
    borderColor: Colours.red,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.red,
      color: Colours.white,
    },
  },
})

const TransparentRedButton = props => {
  const classes = useTransparentRedBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default TransparentRedButton
