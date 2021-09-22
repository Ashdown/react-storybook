import React from 'react'
import debounce from 'lodash/fp/debounce'
import isEmpty from 'lodash/fp/isEmpty'
import noop from 'lodash/fp/noop'
import isEqual from 'lodash/fp/isEqual'
import some from 'lodash/fp/some'
import {Form as FinalForm} from 'react-final-form'

export default class Form extends React.Component {
    getModel() {
        return this.props.mapping ? this.props.mapping(this._values) : this._values
    }

    submit() {
        return this._handleSubmit()
    }

    reset() {
        setTimeout(this._reset, 0)
    }

    render() {
        const {onValidSubmit, onSubmit, onChange, mapping, onValid, onInvalid, children, ...props} = this.props

        const _onSubmit = (...args) => { // this allows the arrity of the function to be 0 (which final form uses to infer the async api to use)
            const values = args[0]
            const formApi = args[1]
            const setErrors = args[2]
            const submitFunction = onValidSubmit || onSubmit
            const mappedValues = mapping ? mapping(values) : values
            submitFunction(mappedValues, formApi.reset, setErrors)
        }
        const _onChange = onChange || noop
        const _onValid = debounce(300, onValid || noop)
        const _onInvalid = debounce(300, onInvalid || noop)

        const _onDebug = ({dirty, valid, initialValues, values, modified}) => {
            if (!isEqual(this._values, values) || !isEqual(this._valid, valid)) {
                this._values = values
                this._valid = valid
                const formHasChanged = some(Boolean)(modified)
                if (formHasChanged) _onChange(values)
                if ((dirty || !isEmpty(initialValues)) && valid) _onValid() //formsy seems to validate the form before it's touched if there are initialValues
                if ((dirty || !isEmpty(initialValues)) && !valid) _onInvalid() //formsy seems to validate the form before it's touched if there are initialValues
            }
        }

        return (
            <FinalForm onSubmit={_onSubmit} debug={_onDebug} {...props}>
                {renderProps => {
                    this._handleSubmit = renderProps.handleSubmit
                    this._reset = renderProps.form.reset
                    return (
                        <form className={props.className} onSubmit={renderProps.handleSubmit}>
                            {children}
                        </form>
                    )
                }}
            </FinalForm>
        )
    }
}


