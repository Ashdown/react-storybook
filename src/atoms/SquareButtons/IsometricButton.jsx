import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Colours from '../../tokens/colours'
import FontWeights from '../../tokens/FontWeights'
import SquareButton from './SquareButton'

const useStyles = createUseStyles({
    btn: {
        border: [2, 'solid'],
        position: 'relative',
        marginRight: 10,
        marginBottom: 10,
        transition: ['all', '0.1s', 'linear'],
        fontWeight: FontWeights.stronger,
        textTransform: 'uppercase',
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            transformOrigin: 'top left',
            borderBottom: [2, 'solid'],
            color: Colours.gabbro,
            transition: ['opacity', '0.1s', 'linear']
        },
        '&:before': {
            borderLeft: [2, 'solid'],
            left: -2,
            bottom: -12,
            width: 'calc(100% + 2px)',
            height: 8,
            transform: 'skewX(45deg)',
        },
        '&:after': {
            borderTop: [2, 'solid'],
            borderRight: [2, 'solid'],
            top: -2,
            right: -12,
            width: 8,
            height: '100%',
            transform: 'skewY(45deg)',
        },
        '&:hover':{
            borderColor: Colours.gabbro,
        },
        '&:active': {
            top: 6,
            left: 6,
            '&:before, &:after': {
                opacity: 0
            }
        }

    },
})

const IsometricButton = props => {
    const classes = useStyles()
    return <SquareButton {...props} className={classNames(classes.btn, props.className)} />
}

export default IsometricButton
