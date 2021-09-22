import React from 'react'

const ConfettiHero = ({ children, colour = 'red' }) => (
  <div class={`confetti-hero ${colour}`}>{children}</div>
)

export default ConfettiHero
