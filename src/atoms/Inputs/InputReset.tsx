import Fonts from '../../tokens/Fonts'

const InputReset = {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    fontFamily: Fonts.openSans,
    '&:-webkit-autofill &:-webkit-autofill:hover &:-webkit-autofill:focus &:-webkit-autofill': {
        '-webkit-box-shadow': [0, 0, 0, 1000, 'transparent', 'inset', '!important'],
        transition: ['background-color', '5000s', 'ease-in-out', '0s', '!important']
    },
    '&:focus': {
        outline: 'none',
    },
}

export default InputReset