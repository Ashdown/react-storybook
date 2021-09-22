import React from 'react'
import classNames from 'classnames'

const PageFrame = ({children, classname = '', colour = '', hasGutter = false, showGrid = false}) => (
    <div class={classNames(
        'page-frame',
        classname,
        colour,
        {'has-gutter': hasGutter},
        {'show-grid': showGrid},
    )}>
        <div class="content-container">
            {children}
        </div>
    </div>
)

export default PageFrame
