import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import LineHeights from '../../tokens/LineHeights'
import FontWeights from '../../tokens/FontWeights'
import MediaQueries from '../../tokens/MediaQueries'
import BaseStyles from './util/BaseStyles'
import { createUseStyles } from 'react-jss'
import Element from "./util/Element";

export const getStyles = createUseStyles({
    quaternaryHeading: {
        ...BaseStyles,
        marginTop: 10,
        fontSize: FontSizes.mobile.quaternaryHeading,
        lineHeight: LineHeights.mobile.quaternaryHeading,
        fontWeight: FontWeights.heavy,
        display: 'block',
        [MediaQueries.desktop]: {
            fontSize: FontSizes.desktop.quaternaryHeading,
        }
    }
});
type QuaternaryHeadingProps = {
    children: React.ReactNode,
    type: string,
}

const QuaternaryHeading = (props:QuaternaryHeadingProps) => {
    const styles = getStyles();
    return <Element type={props.type} className={styles.quaternaryHeading}>{props.children}</Element>
};

QuaternaryHeading.defaultProps = {
    type: 'h4'
}

export default QuaternaryHeading