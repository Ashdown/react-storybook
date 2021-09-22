import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import LineHeights from '../../tokens/LineHeights'
import FontWeights from '../../tokens/FontWeights'
import MediaQueries from '../../tokens/MediaQueries'
import BaseStyles from './util/BaseStyles'
import { createUseStyles } from 'react-jss'
import Element from "./util/Element";

export const getStyles = createUseStyles({
    secondaryHeading: {
        ...BaseStyles,
        marginTop: 20,
        fontSize: FontSizes.mobile.secondaryHeading,
        lineHeight: LineHeights.mobile.secondaryHeading,
        fontWeight: FontWeights.heavy,
        textTransform: 'uppercase',
        [MediaQueries.desktop]: {
            marginTop: 30,
            fontSize: FontSizes.desktop.secondaryHeading,
            fontWeight: FontWeights.superHeavy,
        }
    }
});

type PrimaryHeadingProps = {
    children: React.ReactNode,
    type: string
}

const SecondaryHeading = (props:PrimaryHeadingProps) => {
    const styles = getStyles();
    return <Element type={props.type} className={styles.secondaryHeading}>{props.children}</Element>
};

SecondaryHeading.defaultProps = {
    type: 'h2'
}

export default SecondaryHeading