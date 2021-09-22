import Colours from '../../../tokens/colours'
import Fonts from '../../../tokens/Fonts'
import FontWeights from '../../../tokens/FontWeights'

const normal = 'normal'
const italic = 'italic'

const BaseStyles: {} = {
    '@global': {
        '@font-face': [
            {
                fontFamily: 'Open Sans',
                fontStyle: normal,
                fontWeight: 300,
                src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/OpenSans-Light.ttf")',
            },
            {
                fontFamily: 'Open Sans',
                fontStyle: 'italic',
                fontWeight: 300,
                src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/OpenSans-LightItalic.ttf")',
            },
            {
                fontFamily: 'Open Sans',
                fontStyle: normal,
                fontWeight: 400,
                src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/OpenSans-Regular.ttf")',
            },
            {
                fontFamily: 'Open Sans',
                fontStyle: italic,
                fontWeight: 400,
                src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/OpenSans-RegularItalic.ttf")',
            },
            {
                fontFamily: 'Open Sans',
                fontStyle: normal,
                fontWeight: 600,
                src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/OpenSans-SemiBold.ttf")',
            },
            {
                fontFamily: 'Open Sans',
                fontStyle: italic,
                fontWeight: 600,
                src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/OpenSans-SemiBoldItalic.ttf")',
            },
            {
                fontFamily: 'Open Sans',
                fontStyle: normal,
                fontWeight: 700,
                src: 'url("https://MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/OpenSans-Bold.ttf")',
            },
            {
                fontFamily: 'Open Sans',
                fontStyle: italic,
                fontWeight: 700,
                src: 'url("https: //MYORGANISATION.s3.eu-west-2.amazonaws.com/public/assets/font/OpenSans-BoldItalic.ttf")',
            },
        ]
    },
    color: Colours.basalt,
    fontFamily: Fonts.openSans,
    fontWeight: FontWeights.regular,
    lineHeight: '1em',
}

export default BaseStyles