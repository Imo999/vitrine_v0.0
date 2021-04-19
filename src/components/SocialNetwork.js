import React from 'react'

const SocialNetwork = () => {

  const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a');

    // Effet en allant sur les icones elle bouge
    navLinks.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;
        link.style.transform = `translate(${attrX}px, ${attrY}px)`
      })
      // Effet revient à sa place 
      link.addEventListener('mouseleave', () => {
        link.style.transform = ``
      })
    })



  }

  // import icone
  return (
    <div className="social-network">
      <ul className="content">
        <a href="https://github.com/Imo999" target="_blank"
          rel="noopener noreferrer" className="hover" onMouseOver={anim}>
          <li><i class="fab fa-github"></i></li>
        </a>
        <a href="https://twitter.com/rcajina" target="_blank"
          rel="noopener noreferrer" className="hover" onMouseOver={anim}>
          <li><i class="fab fa-twitter"></i></li>
        </a>
        <a href="https://www.linkedin.com/in/romain-cajina-28681744/" target="_blank"
          rel="noopener noreferrer" className="hover" onMouseOver={anim}>
          <li><i class="fab fa-linkedin-in"></i></li>
        </a>
      </ul>

    </div>
  )
}

export default SocialNetwork
