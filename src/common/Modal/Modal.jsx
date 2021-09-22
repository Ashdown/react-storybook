import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ isOpen=false, onClose, onSuccess, children, closeButtonText = 'Cancel', submitButtonText = 'Ok', classname = '', isIsometric = false, colour='red' }) => (
  <div class={`modal ${classname} ${colour}${isIsometric ? '-isometric' : ''}`}>
    {isOpen &&
    <div>
      <div class="modal-content">
        <div class="frame">
          <div class="face">
            {children}
            {onClose && closeButtonText &&
            <button
              class="cancel-button square-button transparent-transparent"
              onClick={onClose}
            >{closeButtonText}</button>
            }
            {onSuccess &&
            <button
              class="submit-button square-button isometric red"
              onClick={onSuccess}
            >{submitButtonText}</button>
            }
          </div>

          {isIsometric &&
          <div>
            <div class="right-face"/>
            <div class="bottom-face"/>
            <div class="shadow"/>
          </div>
          }
        </div>
        <div
          class="background"
          onClick={onClose || onSuccess}
        />

      </div>

    </div>
    }
  </div>
)

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
  children: PropTypes.node.isRequired,
  closeButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  isIsometric: PropTypes.bool
}

export default Modal
