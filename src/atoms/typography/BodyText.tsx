import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import LineHeights from '../../tokens/LineHeights'
import FontWeights from '../../tokens/FontWeights'
import MediaQueries from '../../tokens/MediaQueries'
import BaseStyles from "./util/BaseStyles"
import { createUseStyles } from 'react-jss'
import Element from "./util/Element";
import classNames from 'classnames'

export const getStyles = createUseStyles({
    bodyText: {
        ...BaseStyles,
        fontSize: FontSizes.mobile.body,
        lineHeight: LineHeights.mobile.body,
        fontWeight: FontWeights.regular,
        [MediaQueries.desktop]: {
            fontSize: FontSizes.desktop.body,
            lineHeight: LineHeights.desktop.body
        }
    }
});
type BodyTextProps = {
    children: React.ReactNode,
    type: string,
    className: string,
}

const BodyText = (props:BodyTextProps) => {
    const styles = getStyles();
    return <Element className={classNames(styles.bodyText, props.className)} type={props.type}>{props.children}</Element>
};

BodyText.defaultProps = {
    type: 'p',
    classname: '',
};

export default BodyText

