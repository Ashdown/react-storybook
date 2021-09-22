import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import SquareButton from './SquareButton'

const useMintMintBtnStyles = createUseStyles({
  btn: {
    backgroundColor: Colours.mint,
    color: Colours.blue,
    borderColor: Colours.mint,
    '&:hover:not([disabled])': {
      backgroundColor: Colours.darkMint,
      borderColor: Colours.darkMint,
    },
  },
})

const MintMintButton = props => {
  const classes = useMintMintBtnStyles()
  return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default MintMintButton
