import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useWhiteWhiteRedBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.white,
    color: Colours.red,
    borderColor: Colours.white,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.pumice,
      color: Colours.red,
    },
  },
})

const WhiteWhiteRedButton = props => {
  const classes = useWhiteWhiteRedBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default WhiteWhiteRedButton
