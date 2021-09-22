import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import LineHeights from '../../tokens/LineHeights'
import MediaQueries from '../../tokens/MediaQueries'
import BaseStyles from "./util/BaseStyles";
import { createUseStyles } from 'react-jss'
import Element from "./util/Element";

export const getStyles = createUseStyles({
    smallText: {
        ...BaseStyles,
        marginTop: 10,
        fontSize: FontSizes.mobile.small,
        lineHeight: LineHeights.mobile.small,
        [MediaQueries.desktop]: {
            marginTop: 10,
        }
    }
});
type SmallTextProps = {
    children: React.ReactNode,
    type: string
}

const SmallText = (props:SmallTextProps) => {
    const styles = getStyles();
    return <Element className={styles.smallText} type={props.type}>{props.children}</Element>
};

SmallText.defaultProps = {
    type: 'p'
}

export default SmallText

