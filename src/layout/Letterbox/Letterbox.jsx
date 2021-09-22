import React from 'react'
import { PageFrame } from '..'
import PropTypes from 'prop-types'
import { LetterboxActions } from './'

const Letterbox = ({ children, classname = '', buttonData = false, artwork = false, information }) => (
  <li class={`letterbox ${classname} ${buttonData ? 'has-side-content' : ''} ${artwork ? 'has-artwork' : ''}`}>
    <PageFrame>
      <div class="letterbox-content">
        {information &&
          <p class="information body-text">
            {information}
          </p>
        }
        {artwork &&
        <div class="artwork">
          {artwork}
        </div>
        }
        <div class="main-content">
          {children}
        </div>
        {buttonData &&
        <div class="side-content">
          <LetterboxActions buttonData={buttonData}/>
        </div>
        }
      </div>
    </PageFrame>
  </li>
)

Letterbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  classname: PropTypes.string,
  buttonData: PropTypes.array,
  artwork: PropTypes.object,
}

export default Letterbox
