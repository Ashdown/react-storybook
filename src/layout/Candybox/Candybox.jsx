import React from 'react'
import { PageFrame } from '..'
import PropTypes from 'prop-types'
import { CandyboxActions } from './'
import { Link } from "react-router";
import { browserHistory } from 'react-router';

class Candybox extends React.Component {

  onClick = event => {
    const { href = null } = this.props
    href && !['BUTTON', 'A'].includes(event.target.tagName) && !['BUTTON', 'A'].includes(event.target.parentElement.tagName) && browserHistory.push(href)
  }

  render() {

    const { classname = '', buttonData = [], href = null, artwork = null, children, title = null, abstract = null } = this.props

    return (
      <section class={`candybox ${classname} ${buttonData ? 'has-side-content' : ''} ${href ? 'has-link' : ''} ${artwork ? 'has-artwork' : ''}`}>
        {href &&
          <Link to={href} className="hidden-text">Visit {title}</Link>
        }
        <div class="candybox-content" onClick={this.onClick}>
          <PageFrame>
            <div class="main-content">

              <div class="header-content">
                <div class="information-panel">
                  {title &&
                    <h2 class="quaternary-heading candybox-title">{title}</h2>
                  }
                  {abstract}
                </div>
                {artwork &&
                  <div class="artwork">
                    {artwork}
                  </div>
                }
              </div>
              {children}
            </div>
            {buttonData &&
              <div class="side-content">
                <CandyboxActions buttonData={buttonData} />
              </div>
            }
          </PageFrame>
        </div>
      </section>
    )
  }
}

Candybox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  classname: PropTypes.string,
  buttonData: PropTypes.array,
  artwork: PropTypes.object,
  abstract: PropTypes.object,
}

export default Candybox
