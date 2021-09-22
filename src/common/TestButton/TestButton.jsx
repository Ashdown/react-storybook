import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { gabbro, widerThan1024 } from './constants'

const useBaseBtnStyles = createUseStyles({
    baseBtn: {
        fontWeight: 600,
        margin: [0, 5],
        border: [2, 'solid', gabbro],
        color: gabbro,
        lineHeight: '36px',
        fontSize: 12,
        padding: [0, 5],
        display: 'inline-block',
        cursor: 'pointer',
        textAlign: 'center',
        transition: [
            ['background-color', '0.2s', 'linear'],
            ['color', '0.2s', 'linear'],
        ],
        '&:disabled': {
            opacity: 0.5,
            cursor: 'default',
        },
        [widerThan1024]: {
            fontSize: 16,
            lineHeight: '38px',
        },
        '&:focus': {
            outline: 'none',
        },
    },
    wide: {
        width: 120,
        [widerThan1024]: {
            width: 240,
        },
    },
    oldMargins: {
        marginTop: 30,
        [widerThan1024]: {
            marginTop: 50,
        },
    },
})

export const TestButton = props => {
    const classes = useBaseBtnStyles()
    return <button {...props} className={classNames(classes.baseBtn, { [classes.wide]: props.wide, [classes.oldMargins]: props.oldMargins }, props.className)} />
}