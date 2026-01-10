import React from 'react'
import './Box.css'

function Box({ img, content }) {
  return (
    <div className="customer-voice-box">
      {img && (
        <div className="customer-voice-box-image">
          <img src={img} alt="Customer voice" />
        </div>
      )}
      <p className="customer-voice-box-content">
        {content || 'お客様の声をここに記載します。'}
      </p>
    </div>
  )
}

export default Box

