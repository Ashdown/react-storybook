import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useRedRedBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.red,
    color: Colours.white,
    borderColor: Colours.red,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.darkRed,
      borderColor: Colours.darkRed,
    },
  },
})

const RedRedButton = props => {
  const classes = useRedRedBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default RedRedButton
