import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Title from '../Title/Title'
import Timeline from '../Timeline/Timeline'
import './Section.css'

// ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger)

function Section({ introduction, img, titleData, timelineData }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Title要素を取得
    const titleText = section.querySelector('.life-image-title-text')
    const titleSubTop = section.querySelector('.sub-top')
    const titleSubBottom = section.querySelector('.sub-bottom')

    if (!titleText) return

    gsap.set(titleText, {
      opacity: 0,
      y: 30
    })

    if (titleSubTop) {
      gsap.set(titleSubTop, {
        opacity: 0,
        scale: 0,
        y: '-50%', // top: 0からの位置調整
        x: 0,
        transformOrigin: 'top left' // 左上を起点にポップイン
      })
    }
    if (titleSubBottom) {
      gsap.set(titleSubBottom, {
        opacity: 0,
        scale: 0,
        y: '50%', // bottom: 0からの位置調整
        x: 0,
        transformOrigin: 'bottom right' // 右下を起点にポップイン
      })
    }

    // ScrollTriggerでビューポートに入ったらアニメーション実行
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    // 1. タイトルテキストをフェードインアップ
    tl.to(titleText, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    })

    // 2. 遅れて左上、右下がポップイン（transformを維持）
    if (titleSubTop && titleSubBottom) {
      tl.to(titleSubTop, {
        opacity: 1,
        scale: 1,
        y: '-50%',
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, '-=0.2') // タイトルテキストのアニメーションの0.2秒前から開始
      .to(titleSubBottom, {
        opacity: 1,
        scale: 1,
        y: '50%',
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, '-=0.4') // 左上と同時に開始
    } else if (titleSubTop) {
      tl.to(titleSubTop, {
        opacity: 1,
        scale: 1,
        y: '-50%',
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, '-=0.2')
    } else if (titleSubBottom) {
      tl.to(titleSubBottom, {
        opacity: 1,
        scale: 1,
        y: '50%',
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, '-=0.2')
    }

    // クリーンアップ
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [introduction, img, titleData, timelineData])

  return (
    <div className="life-image-section" ref={sectionRef}>
      <Title
        titleSubTop={titleData?.['title-sub-top']}
        titleMain={titleData?.['title-main']}
        titleSubBottom={titleData?.['title-sub-bottom']}
      />
      {img && (
        <div className="life-image-section-image">
          <img src={img} alt={introduction || 'Life image'} />
        </div>
      )}
      <p className="life-image-section-introduction">{introduction}</p>
      <Timeline items={timelineData} />
    </div>
  )
}

export default Section

