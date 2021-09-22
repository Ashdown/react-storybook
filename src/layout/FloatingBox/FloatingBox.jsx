import React from 'react'
import PropTypes from 'prop-types'
import { PageFrame } from '../'

const FloatingBox = ({ children, visible = false, classname = '', colour = 'red' }) => (
  <div class={`floating-box ${classname} ${colour} ${visible ? 'visible' : 'not-visible'}`}>
    <PageFrame colour={colour} classname="floating-box-page-frame">
      <div class="inner-content">
        {children}
      </div>
    </PageFrame>

  </div>
)

FloatingBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  visible: PropTypes.bool,
  classname: PropTypes.string,
  colour: PropTypes.string,
}

export default FloatingBox
