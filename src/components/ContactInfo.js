import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SocialNetwork from './SocialNetwork';

const ContactInfo = () => {
  return (
    <div className="contact-infos">
      <div className="address">
        <div className="content">
          <h4>Adresse</h4>
          <p>Rue de Paris</p>
          <p>91120 - Palaiseau</p>
        </div>
      </div>
      <div className="phone">
        <div className="content">
          <h4>Phone</h4>
          <CopyToClipboard text="33767189809" className="hover">
            <p
              style={{ cursor: 'pointer' }}
              className="clipboard"
              onClick={() => {
                alert("Phone copied !");
              }}
            >
              +33 7 67 18 98 09
                </p>
          </CopyToClipboard>
        </div>
      </div>
      <div className="email">
        <div className="content">
          <h4>email</h4>
          <CopyToClipboard text="contact@imo999.io" className="hover">
            <p
              style={{ cursor: 'pointer' }}
              className="clipboard"
              onClick={() => {
                alert("Email copied !");
              }}
            >
              contact@imo999.io
                </p>
          </CopyToClipboard>
        </div>
      </div>
      <SocialNetwork />
      <div className="credits">
        <p>By Imo999 - 2021</p>
      </div>
    </div>
  )
}

export default ContactInfo
