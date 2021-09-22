import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useMintTransparentBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.mint,
    color: Colours.blue,
    borderColor: Colours.mint,
    '&:hover:not([disabled])': {
      backgroundColor: 'transparent',
      color: Colours.mint,
    },
  },
})

const MintTransparentButton = props => {
  const classes = useMintTransparentBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default MintTransparentButton
