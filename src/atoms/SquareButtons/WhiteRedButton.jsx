import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useWhiteRedBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.white,
    color: Colours.red,
    borderColor: Colours.red,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.red,
      color: Colours.white,
    },
  },
})

const WhiteRedButton = props => {
  const classes = useWhiteRedBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default WhiteRedButton
