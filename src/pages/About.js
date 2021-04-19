import React from 'react'
import Navigation from '../components/Navigation'
import ButtonsBottom from '../components/ButtonsBottom'

const About = () => {
  return (
    <div>
      <Navigation />
      <div>
        About
      </div>
      <ButtonsBottom left={'/'} right={'/Experience'} />
    </div>
  )
}

export default About
