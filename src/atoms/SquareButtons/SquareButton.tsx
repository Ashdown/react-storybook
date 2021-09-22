import React from 'react';
import MediaQueries from '../../tokens/MediaQueries'
import {createUseStyles} from 'react-jss'
import classNames from 'classnames'
import Colours from '../../tokens/colours'
import Timing from '../../tokens/timing'
import FontWeights from '../../tokens/FontWeights'
import { Link } from 'react-router'
import BaseStyles from '../typography/util/BaseStyles'

export const getStyles = createUseStyles({
    squareButton: {
        ...BaseStyles,
        fontWeight: 600,
        border: [2, 'solid', Colours.gabbro],
        color: Colours.gabbro,
        backgroundColor: 'transparent',
        lineHeight: '36px',
        fontSize: 12,
        padding: [0, 5],
        display: 'inline-block',
        cursor: 'pointer',
        textAlign: 'center',
        transition: ['all', Timing.standard, 'linear'],
        '&:disabled': {
            opacity: 0.5,
            cursor: 'default',
        },
        '&:focus': {
            outline: 'none',
        },
        '&:hover': {
            backgroundColor: Colours.gabbro,
            color: Colours.white,
            '&.disabled, &:disabled': {
                color: Colours.gabbro,
                backgroundColor: Colours.transparent,
            }
        },
        [MediaQueries.desktop]: {
            fontSize: 16,
            lineHeight: '38px',
            fontWeight: FontWeights.stronger,
            paddingLeft: 10,
            paddingRight: 10,
        }
    }
});

interface squareButtonProps {
    children: React.ReactNode,
    className?: string
    disabled: boolean
    to?: string
}

const SquareButton = (props: squareButtonProps) => {
    const styles = getStyles();
    if(props.to) {
        //TODO: does link have a component prop?
        //TODO: look into doing this a render prop
        return <Link className={classNames(styles.squareButton, props.className)} to={props.to}>{props.children}</Link>
    } else {
        return <button className={classNames(styles.squareButton, props.className)}
                       disabled={props.disabled}>{props.children}</button>
    }
};

SquareButton.defaultProps = {
    disabled: false
};

export default SquareButton
