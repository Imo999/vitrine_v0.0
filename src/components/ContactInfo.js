import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SocialNetwork from './SocialNetwork';

const ContactInfo = () => {
  return (
    <div className="contact-infos">
      <div className="address">
        <div className="content">
          <h4>adresse</h4>
          <p>3 rue des Hugeunots</p>
          <p>89330 - St Julien du Sault</p>
        </div>
      </div>
      <div className="phone">
        <div className="content">
          <h4>Phone</h4>
          <CopyToClipboard text="33645253049" className="hover">
            <p
              style={{ cursor: 'pointer' }}
              className="clipboard"
              onClick={() => {
                alert("Phone copied !");
              }}
            >
              +33 06 45 25 30 49
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
