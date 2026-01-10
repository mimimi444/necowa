import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OfferContent from './OfferContent/OfferContent'
import PriceList from './PriceList/PriceList'
import './CTA.css'

// ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger)

function CTA({ separateLight = false, separateDark = false }) {
  const ctaRef = useRef(null)

  useEffect(() => {
    const section = ctaRef.current
    if (!section) return

    // offer-content要素を取得
    const offerContent = section.querySelector('.offer-content')
    // price-list要素を取得
    const priceList = section.querySelector('.price-list')

    if (!offerContent || !priceList) return

    // offer-content内の要素を取得（ボタンは除く）
    const offerStrong = offerContent.querySelector('strong')
    const offerTitle = offerContent.querySelector('h3.offer-content-title')

    // price-list直下の要素を取得
    const priceTitle = priceList.querySelector('h3.price-list-title')
    const priceGrid = priceList.querySelector('.price-list-grid')

    // ボタンとボタンアイコンを取得
    const button = offerContent.querySelector('.cta-button')
    const buttonIcon = button ? button.querySelector('.cta-button-icon') : null

    // 初期状態：すべて透明にして下に移動
    const offerElements = [offerStrong, offerTitle].filter(Boolean)
    const priceElements = [priceTitle, priceGrid].filter(Boolean)
    
    gsap.set([...offerElements, ...priceElements], {
      opacity: 0,
      y: 30
    })

    // ボタンアイコンの初期状態：ボタンの外側、下部に配置
    if (buttonIcon && button) {
      // ボタンの高さを取得
      const buttonHeight = button.offsetHeight
      gsap.set(buttonIcon, {
        y: buttonHeight + 50, // ボタンの下部から50px下に配置
        opacity: 1
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

    // offer-contentの要素を順番にフェードイン
    if (offerStrong) {
      tl.to(offerStrong, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
    }

    if (offerTitle) {
      tl.to(offerTitle, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3') // 前の要素と少しオーバーラップ
    }

    // price-listの要素を順番にフェードイン
    if (priceTitle) {
      tl.to(priceTitle, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.2')
    }

    if (priceGrid) {
      tl.to(priceGrid, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3')
    }

    // ボタンアイコンを最後にスライドアップ
    if (buttonIcon) {
      tl.to(buttonIcon, {
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.7)' // バウンス効果を追加
      }, '-=0.2')
    }

    // クリーンアップ
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [])

  const classNames = ['cta'];
  if (separateLight) classNames.push('separate-light');
  if (separateDark) classNames.push('separate-dark');
  
  return (
    <section className={classNames.join(' ')} ref={ctaRef}>
      <div className="cta-container">
        <OfferContent />
        <PriceList />
      </div>
    </section>
  )
}

export default CTA

