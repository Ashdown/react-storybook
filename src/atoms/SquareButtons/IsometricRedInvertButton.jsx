import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import IsometricButton from './IsometricButton'

const useStyles = createUseStyles({
    btn: {
        color: Colours.white,
        backgroundColor: Colours.red,
        borderColor: Colours.white,
        '&:before, &:after': {
            backgroundColor: Colours.white,
            color: Colours.white,
        },
        '&:hover': {
            color: Colours.white,
            backgroundColor: Colours.darkRed,
            borderColor: Colours.white,
        }

    },
})

const IsometricWhiteButton = props => {
    const classes = useStyles()
    return <IsometricButton {...props} className={classNames(classes.btn, props.className)} />
}

export default IsometricWhiteButton
