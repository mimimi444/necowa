import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo">
            <img src="/necowa-logo.svg" alt="Necowa" />
          </div>
          <p className="header-catchcopy">渋谷の保護ネココワーキングスペース</p>
        </div>
        <button
          className="header-hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <img src="/hamburger.svg" alt="メニュー" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header

