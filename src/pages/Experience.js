import React from 'react'
import Navigation from '../components/Navigation'
import ButtonsBottom from '../components/ButtonsBottom'

const Experience = () => {
  return (
    <div>
      <Navigation />
      <div>
        Page d'xp
      </div>
      <ButtonsBottom left={'/About'} right={'/project-1'} />
    </div>
  )
}

export default Experience
