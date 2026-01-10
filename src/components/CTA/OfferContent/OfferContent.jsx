import React from 'react'
import './OfferContent.css'
import Button from '../Button/Button'

function OfferContent({ title, description }) {
  return (
    <div className="offer-content">
      <strong>2月限定キャンペーン</strong>
      <h3 className="offer-content-title">
        事前予約で入会金<span className="large">1000</span>円が<br/><span className="x-large">無料！</span>
      </h3>
      <Button />
    </div>
  )
}

export default OfferContent

