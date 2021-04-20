import React from 'react'
import Navigation from '../components/Navigation'
import ButtonsBottom from '../components/ButtonsBottom'

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <header>
        <h1>About me</h1>
      </header>
      <main className="container">
        <article className="networkadmin">
          <div className="container">
            <h2>Network Administrator</h2>
            <p>– Phoebe – Jan. 2008 à Aug. 2017</p>
            <ul>
              <li>Creation of a Hotline : Software and hardware of a music and video station internal to the stores - Fly, Cuisinella, Shmidt, Joué Club - more than 300 customers -</li>
              <li>Network Administration</li>
              <li>Maintenance of user stations -park of about 40 stations-</li>
              <li>Masterisation</li>
              <li>Installation of FTP servers</li>
              <li>Design and integration of industrial PCs</li>
              <li>Creation of procedures and documentations</li>
              <li>Training of users</li>
            </ul>
            <p className="astuce" >“Believe you can and you’re halfway there.” - T. Roosevelt -</p>
          </div>
        </article>
        <article className="leadfield">
          <div className="container">
            <h2>Team Leader Field Engineer / Commissioning Engineer</h2>
            <p>– Phoebe – Sept. 2012 à Aug. 2017</p>
            <ul>
              <h3>Skill</h3>
              <li>Survey : site visit before WDM deploymen</li>
              <li>Staging : pre-mounting of WDM equipment</li>
              <li>WDM equipment installation</li>
              <li>Commissioning / Provisioning of WDM equipment</li>
              <li>WDM equipment commissioning</li>
              <li>Troubleshooting</li>
              <li>Analysis of existing traffic</li>
            </ul>
            <ul>
              <h3>Examples of completed projects:</h3>
              <li>Nordunet - Deployment of a WDM network : 97 sites in total in 5 countries - Denmark, Norway, Sweden, Finland, Iceland -</li>
              <li>Bouygues Telecom : Upgrade 4G</li>
              <li>Roche Switzerland : DC Migration - insertion of a new site on an existing network</li>
              <li>Tullet England : Creation of a new corporate network</li>
            </ul>
            <p className="astuce" >xxxx</p>
          </div>
        </article>
        <article className="transmissioneng">
          <div className="container">
            <h2>transmissioneng</h2>
            <p>– Phoebe – Janvier 2008 à Aout 2012</p>
            <ul>
              <li>Creation of a Hotline : Software and hardware of a music and video station internal to the stores - Fly, Cuisinella, Shmidt, Joué Club - more than 300 customers -</li>
              <li>Network Administration</li>
            </ul>
            <p className="astuce" >xxxx</p>
          </div>
        </article>
        <article className="accountmanager">
          <div className="container">
            <h2>accountmanager</h2>
            <p>– Phoebe – Janvier 2008 à Aout 2012</p>
            <ul>
              <li>Creation of a Hotline : Software and hardware of a music and video station internal to the stores - Fly, Cuisinella, Shmidt, Joué Club - more than 300 customers -</li>
              <li>Network Administration</li>
            </ul>
            <p className="astuce" >xxxx</p>
          </div>
        </article>
        <article className="libre">
          <div className="container">
            <h2>Liberté</h2>
            <p>– Phoebe – Janvier 2008 à Aout 2012</p>
            <ul>
              <li>Creation of a Hotline : Software and hardware of a music and video station internal to the stores - Fly, Cuisinella, Shmidt, Joué Club - more than 300 customers -</li>
              <li>Network Administration</li>
            </ul>
            <p className="astuce" >xxxx</p>
          </div>
        </article>
      </main>





      <ButtonsBottom left={'/'} right={'/project-1'} />
    </div >
  )
}

export default About