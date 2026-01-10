import React from 'react'
import './Button.css'

function Button({ text, onClick, variant = 'primary' }) {
  return (
    <button
      className={`cta-button cta-button--${variant}`}
      onClick={onClick}
    >
        <img  className="cta-button-icon" src="/catIcon.svg" alt="caticon" />
      予約カレンダーを見る
      <img className='cta-calendar-icon' src='/calendarIcon.svg' alt='calendaricon' />
    </button>
  )
}

export default Button

