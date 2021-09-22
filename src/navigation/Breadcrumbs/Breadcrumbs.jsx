import React from 'react'
import { Link } from 'react-router'
import { PageFrame } from '../../layout/'
import PropTypes from 'prop-types'

const getBreadcrumbsClass = (colour) => `breadcrumbs ${colour}`

const getLabelText = text => <span class="hidden-text">{text}</span>

const getBreadcrumbClass = (isActive, isCurrent) => `breadcrumb ${(isActive || isCurrent) ? 'active' : 'inactive'}`

const Breadcrumbs = ({ data, colour = 'red' }) => (
  <div class={getBreadcrumbsClass(colour, data)}>
    <PageFrame>
      <ul class="breadcrumb-list">
        {data.map(({ label, url, isActive, isCurrent }, index) =>
          <li class="breadcrumb-item" key={index}>
            {isActive ?
              <Link className={getBreadcrumbClass(isActive, isCurrent)} to={url}>{getLabelText(label)}</Link> :
              <button class={getBreadcrumbClass(isActive, isCurrent)} disabled>{getLabelText(label)}</button>
            }
          </li>)}
      </ul>
    </PageFrame>
  </div>
)

Breadcrumbs.propTypes = {
    data: PropTypes.array.isRequired,
    colour: PropTypes.string,
}

export default Breadcrumbs
