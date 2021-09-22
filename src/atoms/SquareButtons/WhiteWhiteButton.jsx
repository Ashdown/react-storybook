import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useWhiteWhiteBtnStyles = createUseStyles({
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

const WhiteWhiteButton = props => {
  const classes = useWhiteWhiteBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default WhiteWhiteButton
