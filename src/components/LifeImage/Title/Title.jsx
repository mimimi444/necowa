import React from 'react'
import './Title.css'

function Title({ titleSubTop, titleMain, titleSubBottom }) {
  return (
    <h3 className="life-image-title-text">
      {titleSubTop && <span className="sub-top">{titleSubTop}</span>}
      {titleMain}
      {titleSubBottom && <span className="sub-bottom">{titleSubBottom}</span>}
    </h3>
  )
}

export default Title

