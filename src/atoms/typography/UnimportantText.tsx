import React from 'react';
import FontSizes from '../../tokens/FontSizes'
import BaseStyles from "./util/BaseStyles";
import { createUseStyles } from 'react-jss'
import Element from "./util/Element";

export const getStyles = createUseStyles({
    unimportantText: {
        ...BaseStyles,
        fontSize: FontSizes.mobile.unimportant,
    }
});
type UnimportantTextProps = {
    children: React.ReactNode,
    type: string,
}

const UnimportantText = (props:UnimportantTextProps) => {
    const styles = getStyles();
    return <Element className={styles.unimportantText}>{props.children}</Element>
};

UnimportantText.defaultProps = {
    type: 'p'
}

export default UnimportantText

