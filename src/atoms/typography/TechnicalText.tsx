import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import LineHeights from '../../tokens/LineHeights'
import Fonts from '../../tokens/Fonts'
import BaseStyles from "./util/BaseStyles";
import { createUseStyles } from 'react-jss'
import Element from "./util/Element";

export const getStyles = createUseStyles({
    technicalText: {
        ...BaseStyles,
        marginTop: 2,
        fontSize: FontSizes.mobile.technical,
        lineHeight: LineHeights.mobile.technical,
        fontFamily: Fonts.monospace,
        whiteSpace: 'pre',
        opacity: 0.5
    }
});
type TechnicalTextProps = {
    children: React.ReactNode,
    type: string
}

const TechnicalText = (props:TechnicalTextProps) => {
    const styles = getStyles();
    return <Element className={styles.technicalText} type={props.type}>{props.children}</Element>
};

TechnicalText.defaultProps = {
    type: 'p'
}

export default TechnicalText

