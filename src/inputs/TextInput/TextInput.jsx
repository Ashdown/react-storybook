import React from 'react'
import {Field as HOC} from '../'
import BaseControl from '../BaseControl'
import _identity from 'lodash/identity'

export const getter = (getValue, initialValue) => {
    const value = getValue && getValue()
    return value !== undefined ? value : initialValue
}

const TextInput = props => (
    <BaseControl {...props} class={`dk-text-input ${props.colour || 'red'} ${props.className || ''}`}>
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

TextInput.Controlled = HOC(TextInput)

export default TextInput
