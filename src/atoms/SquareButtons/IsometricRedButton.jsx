import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import IsometricButton from './IsometricButton'

const useStyles = createUseStyles({
    btn: {
        color: Colours.white,
        backgroundColor: Colours.red,
        borderColor: Colours.blue,
        '&:before, &:after': {
            backgroundColor: Colours.blue,
            color: Colours.blue,
        },
        '&:hover': {
            backgroundColor: Colours.darkRed,
            borderColor: Colours.blue,
        }

    },
})

const IsometricRedButton = props => {
    const classes = useStyles()
    return <IsometricButton {...props} className={classNames(classes.btn, props.className)} />
}

export default IsometricRedButton
