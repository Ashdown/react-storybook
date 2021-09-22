import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useTransparentTransparentBtnStyles = createUseStyles({
  btn: {
    backgroundColor: 'transparent',
    color: Colours.gabbro,
    borderColor: 'transparent',
    '&:hover:not([disabled])': {
      color: Colours.red,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  },
})

const TransparentTransparentButton = props => {
  const classes = useTransparentTransparentBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default TransparentTransparentButton
