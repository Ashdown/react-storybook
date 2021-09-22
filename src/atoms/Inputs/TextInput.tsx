import React from 'react'
import {Field as HOC} from '../../inputs'
import BaseControl from '../../inputs/BaseControl'
import _identity from 'lodash/identity'
import {createUseStyles} from "react-jss";
import Colours from '../../tokens/colours'
import FontWeights from '../../tokens/FontWeights'
import Timing from '../../tokens/timing'
import classNames from 'classnames'
import InputReset from './InputReset'
import MediaQueries from '../../tokens/MediaQueries'

const getStyles = createUseStyles({
    textInput: {
        '& $input': {
            ...InputReset,
            padding: [5, 1, 2, 1],
            color: Colours.gabbro,
            fontSize: 12,
            lineHeight: '1.4em',
            fontWeight: FontWeights.regular,
            letterSpacing: 0.3,
            width: '100%',
            height: 'auto',
            borderBottom: [2, 'solid', Colours.black],
            boxSizing: 'border-box',
            transition: ['colour', Timing.standard, 'linear'],
            '&::placeholder': {
                color: Colours.andesite
            }
        },
        '&:hover, &:active': {
            color: Colours.basalt,
            borderColor: Colours.darkRed
        },
        '&.red': {
            '& $input': {
                borderBottomColor: Colours.red
            }
        },
        '&.blue': {
            '& $input': {
                borderBottomColor: Colours.blue
            }
        },
        '&.has-error': {
            '& $input': {
                backgroundColor: 'rgba(238, 53, 87, 0.7)',
                color: Colours.white,
                '&::placeholder': {
                    color: Colours.white
                },
                '&:hover, &:active': {
                    backgroundColor: 'rgba(208, 41, 83, 0.7)'
                }
            }
        },
        [MediaQueries.desktop]: {
            marginTop: 20,
            "& $input": {
                fontSize: 22,
                lineHeight: "1.4em",
                paddingBottom: 4
            },
            "& $character_count": {
                fontSize: "16px",
                lineHeight: "1.4em"
            },
            "& $validation_message": {
                fontSize: 16,
                lineHeight: "1.4em"
            },
            "&.has_character_count, &.has_error, &.has_feedback": {
                paddingBottom: 22
            },
        }
    }
});

interface textInputProps {
    colour: string,
    className: string,
    value?: string,
    onChange?: { (event: object): void }
    setValue?: { (value: []): void }
    getValue: { (): void }
    placeholder?: string
    name: string
    autoComplete: string
}

export const getter = (getValue, initialValue) => {
    const value = getValue && getValue()
    return value !== undefined ? value : initialValue
}

const TextInput = (props: textInputProps) => {
    const styles = getStyles();
    return (
        <BaseControl {...props} class={classNames(styles.textInput, props.colour, props.className)}>
            <input
                className="input"
                type='text'
                value={getter(props.getValue, props.value)}
                onChange={event => {
                    props.onChange && props.onChange(event)
                    props.setValue && props.setValue(_identity(event.currentTarget.value))
                }}
                placeholder={props.placeholder}
                id={props.name}
                autoComplete={props.autoComplete}
            />
        </BaseControl>
    )
}

TextInput.defaultProps = {
    colour: 'red',
    classname: '',
    autoComplete: false,
}

TextInput.Controlled = HOC(TextInput)

export default TextInput
