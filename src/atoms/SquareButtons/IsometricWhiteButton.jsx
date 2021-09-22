import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import IsometricButton from './IsometricButton'

const useStyles = createUseStyles({
    btn: {
        color: Colours.red,
        backgroundColor: Colours.white,
        borderColor: Colours.blue,
        '&:before, &:after': {
            backgroundColor: Colours.blue,
            color: Colours.blue,
        },
        '&:hover': {
            color: Colours.red,
            backgroundColor: Colours.pumice,
            borderColor: Colours.blue,
        }

    },
})

const IsometricWhiteButton = props => {
    const classes = useStyles()
    return <IsometricButton {...props} className={classNames(classes.btn, props.className)} />
}

export default IsometricWhiteButton
