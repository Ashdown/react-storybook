import React from 'react'
import identity from 'lodash/fp/identity'
import isString from 'lodash/fp/isString'
import {Field as FinalFormField} from 'react-final-form'
import pipe from "lodash/fp/pipe";
import split from "lodash/fp/split";
import remove from "lodash/fp/remove";
import isEmpty from "lodash/fp/isEmpty";
import map from "lodash/fp/map";
import isUndefined from "lodash/fp/isUndefined";
import isName from '../util/helpers/isName'
import PostcodeHelper from '../util/helpers/PostcodeHelper'
import isNumber from 'lodash/fp/isNumber'
import isNull from 'lodash/fp/isNull'
import isEqual from 'lodash/fp/isEqual'
import moment from 'moment-timezone'

const firstTruthy = fns => (...args) => {
    for (const fn of fns) {
        const result = fn(...args)
        if(result) return result
    }
    return undefined
}

//these must return true if valid (FF is the opposite)
const validationMap = {
    'required-true': val => isNumber(val) || !isEmpty(val) || isNull(val), // lodash believes numbers are empty - and null is used by us as an affirmative value
    // eslint-disable-next-line eqeqeq
    'required-equals': (val, otherVal) => val != otherVal, // must check '0' = 0
    'required-isEmpty': val => !isEmpty(val),
    'required-isFalse': val => val !== false,
    isNotEmptyString: val => !isEmpty(val),
    maxLength: (val = '', length) => val.length <= length,
    isPostcode: val => !val || PostcodeHelper.isPostcode(val),
    isFullPostcode: val => !val || PostcodeHelper.isFullPostcode(val),
    isName,
    isNotBlank: val => val && val.trim().length,
    isURL: val => {
        try {
            new URL(val)
            return true
        } catch (e) {
            return false
        }
    },
    isEmail: val => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val),
    isAfterTime: (val, otherFieldKey, otherFields) => otherFields[otherFieldKey] ? moment(val, 'HH:mm').isAfter(moment(otherFields[otherFieldKey], 'HH:mm')) : true,
    equalsField: (val, otherFieldKey, otherFields) => isEqual(val, otherFields[otherFieldKey]),
}

const formsyStringToFFValidators = (validations = '', errMsgMap = {}, stdErr) => pipe(
    split(','),
    remove(isEmpty),
    map(validation => {
        const [validationName, validationArg] = validation.split(':')
        const validator = validationMap[validationName]
        if (!validator)
            return console.error(`Invalid validator ('${validationName}') used in Formsy Adapter in validations(${validations})`)// eslint-disable-line no-console
        // FF requires that if valid return undefined, else errMsg or true (formsy is the opposite)
        return (value, ...formStuff) => validator(value, validationArg, ...formStuff) ? undefined : (errMsgMap[validationName] || stdErr || true)
    }),
    remove(isUndefined),
)(validations)



const Field = Component => class HOC extends React.Component {
    constructor(props) {
        super(props)
        this.initialValue = props.value
    }

    shouldComponentUpdate(nextProps) {
        if (!moment.isMoment(nextProps.value) && !isEqual(nextProps.value, this.props.value)) { //time changes on render (formsy ignores them)
            this._setValue && this._setValue(nextProps.value) // if the client tries to change the value themselves
            return false // the intercept the state change and send a message to redux form to change
        }
        return true
    }

    render() {
        const {name, validations, validationError, validationErrors, required} = this.props

        // FF validators
        const allValidationStrings = [required ? `required-${required}` : '', validations ? validations : ''].join(',')
        const FFValidators = formsyStringToFFValidators(allValidationStrings, validationErrors, validationError)

        // parse and format props needed else FF uses a default formatter which changes undefineds into '' and vice versa
        return (
            <FinalFormField name={name} initialValue={this.initialValue} parse={identity} format={identity}
                            validate={firstTruthy(FFValidators)} allowNull>
                {fieldRenderProps => {
                    this._setValue = fieldRenderProps.input.onChange
                    return (
                        <Component
                            {...this.props}
                            value={fieldRenderProps.input.value}
                            getValue={() => fieldRenderProps.input.value}
                            setValue={val => fieldRenderProps.input.onChange(val)}
                            showRequired={() => required && fieldRenderProps.meta.invalid}
                            isFormSubmitted={() => fieldRenderProps.meta.submitFailed || fieldRenderProps.meta.submitSucceeded}
                            getErrorMessage={pipe(() => fieldRenderProps.meta.error || fieldRenderProps.meta.submitError, msg => isString(msg) && msg)}
                            showError={() => (fieldRenderProps.meta.touched || fieldRenderProps.meta.modified) && fieldRenderProps.meta.error || fieldRenderProps.meta.submitError}
                        />
                    )
                }}
            </FinalFormField>
        )
    }
}

export default Field