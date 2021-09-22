import React from 'react';
import {createUseStyles} from 'react-jss'
import Fonts from '../../tokens/Fonts'

export const getStyles = unicode => createUseStyles({
    '@global': {
        '@font-face':
            {
                fontFamily: 'FontAwesome',
                src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/fa-solid-900.ttf")',
                fallbacks: {
                    src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/fa-solid-900.eot?#iefix") format("embedded-opentype"), url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/fa-solid-900.woff2") format("woff2"), url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/fa-solid-900.woff") format("woff"), url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/fa-solid-900.ttf") format("truetype"), url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/fa-solid-900.svg#fontawesome") format("svg")'
                }
            },
    },
    icon: {
        '&:before': {
            display: 'inline-block',
            fontFamily: Fonts.fontAwesome,
            content: `"${unicode}"`,
        }
    }
});

interface iconProps {
    unicode: string
}

const Icon = (props: iconProps) => {
    const character = `\\${props.unicode}`
    const styles = getStyles(character)();
    return <span className={styles.icon}/>
};

Icon.defaultProps = {
    unicode: 'f031',
};


export default Icon
