import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import LineHeights from '../../tokens/LineHeights'
import FontWeights from '../../tokens/FontWeights'
import MediaQueries from '../../tokens/MediaQueries'
import {createUseStyles} from 'react-jss'
import BaseStyles from "./util/BaseStyles";
import Element from "./util/Element";

export const getStyles = createUseStyles({
    primaryHeading: {
        ...BaseStyles,
        marginTop: 25,
        fontSize: FontSizes.mobile.primaryHeading,
        lineHeight: LineHeights.mobile.primaryHeading,
        fontWeight: FontWeights.heavy,
        textTransform: 'uppercase',
        [MediaQueries.tablet]: {
            fontSize: FontSizes.tablet.primaryHeading,
            fontWeight: FontWeights.superHeavy
        },
        [MediaQueries.desktop]: {
            marginTop: 50,
        }
    }
});

type PrimaryHeadingProps = {
    children: React.ReactNode,
    type: string
}

const PrimaryHeading = (props: PrimaryHeadingProps) => {
    const styles = getStyles();
    return <Element type={props.type} className={styles.primaryHeading}>{props.children}</Element>

};

PrimaryHeading.defaultProps = {
    type: 'h1'
}

export default PrimaryHeading