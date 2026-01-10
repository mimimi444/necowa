import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Box.css'

function Box({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const answerRef = useRef(null)
  const boxRef = useRef(null)

  useEffect(() => {
    const answerEl = answerRef.current
    if (!answerEl) return

    if (isOpen) {
      // 開くアニメーション：上から引き出されるように開く
      gsap.set(answerEl, {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        height: 'auto',
        overflow: 'hidden',
        opacity: 1 // 一時的に表示して高さを測定
      })
      
      const height = answerEl.scrollHeight
      
      gsap.set(answerEl, {
        height: 0,
        opacity: 0
      })
      
      // アニメーション実行
      gsap.to(answerEl, {
        height: height,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    } else {
      // 閉じるアニメーション
      const currentHeight = answerEl.offsetHeight
      
      gsap.to(answerEl, {
        height: 0,
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
  }, [isOpen])

  return (
    <div className="faq-box" ref={boxRef}>
      <button
        className="faq-box-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question || 'よくある質問'}</span>
        <span className="faq-box-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div 
        className="faq-box-answer"
        ref={answerRef}
      >
        {answer || '回答をここに記載します。'}
      </div>
    </div>
  )
}

export default Box

