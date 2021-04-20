import React from 'react'
import Navigation from '../components/Navigation'
import ButtonsBottom from '../components/ButtonsBottom'
import ContactInfo from '../components/ContactInfo'
import { motion } from "framer-motion";
import ContactForm from '../components/ContactForm';

const Contact = () => {

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [.03, .87, .73, .9],
    duration: .6,
  }



  return (
    <main>
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <div>
          <Navigation />
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
          <ButtonsBottom left="/project-5" />
        </div>
      </motion.div>
    </main>
  )

}

export default Contact