import React, { useEffect , useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Box.css'

function Box({ problem, img, solution, isReverse }) {
  const boxRef = useRef(null)

useEffect(() => {
  const box = boxRef.current
  if (!box) return
  const image = box.querySelector('.needs-box-image')
  const problemEl = box.querySelector('.needs-box-problem')
  const solutionEl = box.querySelector('.needs-box-solution')

  if (!image || !problemEl || !solutionEl) return

  // 初期状態：すべて透明にして下に移動
  gsap.set([image, problemEl, solutionEl], {
    opacity: 0,
    y: 30
  })

  // ScrollTriggerでビューポートに入ったらアニメーション実行
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })
// 1. 画像をフェードイン（最初）
    tl.to(image, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    // 2. problemをフェードイン
    .to(problemEl, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3') // 画像アニメーションの0.3秒前から開始（少しオーバーラップ）
    // 3. solutionをフェードイン（遅延時間を長く）
    .to(solutionEl, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '+=0.3') // problemアニメーションの0.3秒後から開始、または遅延を長くする場合

    // クリーンアップ
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === box) {
          trigger.kill()
        }
      })
    }
  }, [problem, img, solution])

  return (
    <div className={`needs-box ${isReverse ? 'reverse' : ''}`} ref={boxRef}>
      <div className="needs-box-problem">
        <h3 className="needs-box-problem-text">{problem || '問題のテキスト'}</h3>
      </div>
      {img && (
        <div className="needs-box-image">
          <img src={img} alt={problem || 'Needs image'} />
        </div>
      )}
      <div className="needs-box-solution">
        <p className="needs-box-solution-text">
          {solution || '解決策のテキスト'}
        </p>
      </div>
    </div>
  )
}

export default Box

