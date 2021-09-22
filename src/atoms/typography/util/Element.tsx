import React from 'react';

interface elementProps {
    children: React.ReactNode,
    type: string,
    className: string,
};

const Element = (props:elementProps) => {
    const nodes = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        p: 'p',
        li: 'li',
        label: 'label',
    };
    return React.createElement(nodes[props.type] || nodes.p, {className: props.className}, props.children)
};

Element.defaultProps = {
    type: 'p'
};

export default Element