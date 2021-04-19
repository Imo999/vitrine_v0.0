import React from 'react'
import Navigation from '../components/Navigation'
import ButtonsBottom from '../components/ButtonsBottom'
import ContactInfo from '../components/ContactInfo'

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div>
        <ContactInfo />
      </div>
      <ButtonsBottom left="/project-5" />
    </div>
  )
}

export default Contact