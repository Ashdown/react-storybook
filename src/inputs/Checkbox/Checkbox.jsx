import React from 'react'
import {Field as HOC} from '../'
import BaseControl from '../BaseControl'

const Checkbox = props => (
    <BaseControl {...props} labelAfter={props.labelAfter !== false} class={`dk-checkbox ${props.colour || 'red'}`}>
        <label for={props.name} >
            <input id={props.name}
                   type="checkbox"
                   disabled={props.disabled}
                   checked={(props.getValue && props.getValue()) === true}
                   onChange={event => props.setValue && props.setValue(event.currentTarget.checked)}
            />
            <span class="text">
            {props.checkboxlabel}
            {props.postscript && <span class="postscript">{props.postscript}</span>}
      </span>
        </label>
    </BaseControl>
)

Checkbox.Controlled = HOC(Checkbox)

export default Checkbox
