import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import KeyVisual from './components/KeyVisual/KeyVisual'
import Needs from './components/Needs/Needs'
import CTA from './components/CTA/CTA'
import CustomerVoice from './components/CustomerVoice/CustomerVoice'
import LifeImage from './components/LifeImage/LifeImage'
import FAQ from './components/FAQ/FAQ'

// ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // 少し遅延させてDOMが完全にレンダリングされるまで待つ
    const timer = setTimeout(() => {
      // 各セクションのタイトルを取得（KeyVisual以外）
      const sectionTitles = document.querySelectorAll('main section:not(.key-visual) h2')
      
      // 初期状態：タイトルを透明にして下に移動
      gsap.set(sectionTitles, {
        opacity: 0,
        y: 30
      })

      // 各タイトルに対してScrollTriggerアニメーションを設定
      sectionTitles.forEach(title => {
        gsap.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%', // タイトルがビューポートの80%の位置に来たら開始
            end: 'top 50%',
            toggleActions: 'play none none none'
          }
        })
      })
    }, 100)

    // クリーンアップ
    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <KeyVisual />
        <Needs />
        <CTA />
        <CustomerVoice />
        <LifeImage separateLight />
        <CTA separateLight />
        <FAQ separateLight />
        <CTA separateDark />
        <Footer />
      </main>
    </div>
  )
}

export default App

