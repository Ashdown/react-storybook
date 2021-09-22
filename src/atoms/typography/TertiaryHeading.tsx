import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import LineHeights from '../../tokens/LineHeights'
import FontWeights from '../../tokens/FontWeights'
import MediaQueries from '../../tokens/MediaQueries'
import BaseStyles from './util/BaseStyles'
import { createUseStyles } from 'react-jss'
import Element from "./util/Element";

export const getStyles = createUseStyles({
    tertiaryHeading: {
        ...BaseStyles,
        marginTop: 10,
        fontSize: FontSizes.mobile.tertiaryHeading,
        lineHeight: LineHeights.mobile.tertiaryHeading,
        fontWeight: FontWeights.heavy,
        textTransform: 'uppercase',
        [MediaQueries.desktop]: {
            fontSize: FontSizes.desktop.tertiaryHeading,
        }
    }
});
type TertiaryHeadingProps = {
    children: React.ReactNode,
    type: string
}

const TertiaryHeading = (props:TertiaryHeadingProps) => {
    const styles = getStyles();
    return <Element className={styles.tertiaryHeading} type={props.type}>{props.children}</Element>
};

TertiaryHeading.defaultProps = {
    type: 'h3'
}

export default TertiaryHeading