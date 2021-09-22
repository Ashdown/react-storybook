import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const getter = (getValue, initialValue) => {
  const value = getValue && getValue()
  return value !== undefined ? value : initialValue
}

const Label = ({ text, name }) => (<label class='quaternary-heading' for={name}>{text}</label>)

class BaseControl extends React.Component {
  static propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    labelAfter: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    value: PropTypes.any,
    getValue: PropTypes.func,
    setValue: PropTypes.func,
    showError: PropTypes.func,
    getErrorMessage: PropTypes.func,
    showRequired: PropTypes.func,
    isFormSubmitted: PropTypes.func,
    validations: PropTypes.string,
    validationError: PropTypes.string,
    name: PropTypes.string,
    requiredErrorMessage: PropTypes.string,
    readonly: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = { characterCount: this.getCharacterCount(this.props.validations, this.props.value) }
    this.handleChange = this.handleChange.bind(this)
  }

  getCharacterCount(validations, newInputValue = '') {
    const MAX_CHARACTER_COUNT = 10
    if (validations && validations.split('maxLength:')[1]) {
      const charactersRemaining = validations.split('maxLength:')[1] - newInputValue.length
      if (this.props.type !== 'textarea' && this.props.type !== 'rich-text') {
        if (charactersRemaining <= MAX_CHARACTER_COUNT) {
          return charactersRemaining
        } else {
          return false
        }
      } else {
        return charactersRemaining
      }
    } else {
      return false
    }
  }

  handleChange(event) {
    this.setState({
      characterCount: this.getCharacterCount(this.props.validations, event.target.value),
    })
  }

  render() {
    const errorMessage = (this.props.getErrorMessage && this.props.getErrorMessage()) || this.props.validationError
    const requiredError = this.props.showRequired?.() && this.props.isFormSubmitted?.()
    const hasError = this.props.showError?.() || requiredError
    const hasCharacterCount = !this.props.readonly && this.state.characterCount !== false
    const defaultRequiredFeedbackString = 'Required'
    const baseControlClassnames = classNames(
      'dk-base-control',
      this.props.className,
      { 'has-character-count': hasCharacterCount },
      { 'has-error': hasError },
      { 'has-feedback': hasError },
    )
    return (
      <div class={baseControlClassnames} onChange={this.handleChange}>
        {this.props.label && !this.props.labelAfter && <Label text={this.props.label} name={this.props.name} />}
        <div>
          {this.props.type === 'rich-text'
            ? React.Children.map(this.props.children, child => child && React.cloneElement(child, { ...child.props, onCharacterChange: this.handleChange }))
            : this.props.children
          }
        </div>
        {hasCharacterCount && <label class="character-count" for={this.props.name} >{this.state.characterCount + ' characters remaining'}</label>}
        {this.props.label && this.props.labelAfter && <Label text={this.props.label} name={this.props.name} />}
        {hasError && <span class="help-block validation-message">{errorMessage || (requiredError && (this.props.requiredErrorMessage || defaultRequiredFeedbackString))}</span>}
      </div>
    )
  }
}

export default BaseControl
