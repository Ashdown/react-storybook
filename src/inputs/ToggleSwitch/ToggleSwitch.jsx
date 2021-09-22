import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {Field as HOC} from '../'
import BaseControl from '../BaseControl'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const Naked = ({setValue, getValue, name, children, colour = '', disabled = false}) => (
    <label class={`dk-toggle-switch ${colour} ${disabled ? 'disabled' : ''}`}>
        <input
            id={name}
            class="hidden"
            type="checkbox"
            checked={(getValue && getValue()) === true}
            onChange={e => setValue && setValue(e.currentTarget.checked)}
            disabled={disabled}
        />
        <span class="body-text toggle-text">{children}</span>
        <ul class="slider-background">
            <li class="icon-container">
                <FontAwesomeIcon className="icon" icon={faCheck} />
            </li>
            <li class="icon-container">
                <FontAwesomeIcon className="icon" icon={faTimes}/>
            </li>
        </ul>
        <span class="slider"/>
    </label>
)

const ToggleSwitch = props => (
    <BaseControl {...props}>
        <Naked {...props} />
    </BaseControl>
)

ToggleSwitch.Controlled = HOC(ToggleSwitch)

export default ToggleSwitch
