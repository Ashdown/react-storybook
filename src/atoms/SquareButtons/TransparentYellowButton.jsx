import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useTransparentYellowBtnStyles = createUseStyles({
  btn: {
    backgroundColor: 'transparent',
    color: Colours.jaffaOrange,
    borderColor: Colours.jaffaOrange,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.jaffaOrange,
      color: Colours.red,
    },
  },
})

const TransparentYellowButton = props => {
  const classes = useTransparentYellowBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default TransparentYellowButton
