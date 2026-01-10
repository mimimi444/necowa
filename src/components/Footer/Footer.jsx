import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Necowa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

