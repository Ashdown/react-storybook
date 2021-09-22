import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import LineHeights from '../../tokens/LineHeights'
import FontWeights from '../../tokens/FontWeights'
import MediaQueries from '../../tokens/MediaQueries'
import BaseStyles from "./util/BaseStyles";
import { createUseStyles } from 'react-jss'
import Element from "./util/Element";

export const getStyles = createUseStyles({
    abstractText: {
        ...BaseStyles,
        fontSize: FontSizes.mobile.abstract,
        lineHeight: LineHeights.mobile.abstract,
        fontWeight: FontWeights.regular,
        [MediaQueries.desktop]: {
            fontSize: FontSizes.desktop.abstract,
            lineHeight: LineHeights.desktop.abstract
        }
    }
});

type AbstractTextProps = {
    children: React.ReactNode,
    type: string,
}

const AbstractText = (props:AbstractTextProps) => {
    const styles = getStyles();
    return <Element className={styles.abstractText} type={props.type}>{props.children}</Element>
};

AbstractText.defaultProps = {
    type: 'p'
}

export default AbstractText

