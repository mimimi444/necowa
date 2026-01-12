import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './KeyVisual.css'

function KeyVisual() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const titleContainer = titleRef.current
    const section = sectionRef.current
    if (!container || !titleContainer || !section) return

    // 背景画像用の疑似要素を取得（CSSで作成）
    // または、背景画像を覆う要素を作成
    const bgOverlay = document.createElement('div')
    bgOverlay.className = 'key-visual-bg-overlay'
    section.insertBefore(bgOverlay, section.firstChild)

    // SVGファイルを読み込んでインライン表示
    fetch('/fv-copy.svg')
      .then(response => response.text())
      .then(svgText => {
        container.innerHTML = svgText
        const svg = container.querySelector('svg')
        if (!svg) return

        // SVG内の要素を取得
        const copyBadge = svg.querySelector('#copy-badge')
        const copyBadge2 = svg.querySelector('#copy-badge-2')
        const copyBadge3 = svg.querySelector('#copy-badge-3')
        const mainCopy01 = svg.querySelector('#main-copy01')
        const mainCopy02 = svg.querySelector('#main-copy02')
        
        // copy-badgeグループ内のすべての要素を取得
        const copyBadgeElements = copyBadge ? copyBadge.querySelectorAll('*') : []
        const copyBadge2Elements = copyBadge2 ? copyBadge2.querySelectorAll('*') : []
        const copyBadge3Elements = copyBadge3 ? copyBadge3.querySelectorAll('*') : []
        
        // main-copy01, main-copy02内のすべての要素を取得
        const mainCopy01Elements = mainCopy01 ? mainCopy01.querySelectorAll('*') : []
        const mainCopy02Elements = mainCopy02 ? mainCopy02.querySelectorAll('*') : []
        
        // main-copy01, main-copy02にシャドウを適用（Safari対応）
        const shadowFilter = 'drop-shadow(2px 2px 4px rgba(120, 107, 81, 0.5))'
        if (mainCopy01) {
          mainCopy01.style.filter = shadowFilter
          mainCopy01.style.webkitFilter = shadowFilter // Safari用
          mainCopy01.style.transform = 'translateZ(0)' // ハードウェアアクセラレーション
          // 子要素にも適用（Safariで確実に動作させるため）
          mainCopy01Elements.forEach(el => {
            el.style.filter = shadowFilter
            el.style.webkitFilter = shadowFilter
          })
        }
        if (mainCopy02) {
          mainCopy02.style.filter = shadowFilter
          mainCopy02.style.webkitFilter = shadowFilter // Safari用
          mainCopy02.style.transform = 'translateZ(0)' // ハードウェアアクセラレーション
          // 子要素にも適用（Safariで確実に動作させるため）
          mainCopy02Elements.forEach(el => {
            el.style.filter = shadowFilter
            el.style.webkitFilter = shadowFilter
          })
        }
        
        // 初期状態：すべての要素を透明にする
        gsap.set([...copyBadgeElements, ...copyBadge2Elements, ...copyBadge3Elements, ...mainCopy01Elements, ...mainCopy02Elements], { 
          opacity: 0 
        })

        // タイトルの各要素を取得（h3内の各spanとh4）
        const titleLines = titleContainer.querySelectorAll('.title-line')
        const h4 = titleContainer.querySelector('h4')
        
        // タイトルの初期状態：透明にして下に移動
        gsap.set([...titleLines, h4], { 
          opacity: 0, 
          y: 30 
        })

        // 背景画像の初期状態はCSSで設定済み（透明、拡大）

        // タイムラインを作成
        const tl = gsap.timeline()

        // 1. 背景画像をフェード＋ズームアウト（中央から通常サイズに）
        tl.to(bgOverlay, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out'
        })
        // 2. copy-badgeをフェードイン
        .to(copyBadgeElements, {
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out'
        }, '-=0.8') // 背景画像アニメーションの0.75秒後から開始
        .to(copyBadge2Elements, {
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out'
        }, '-=0.6')
        .to(copyBadge3Elements, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.4') // copy-badge-2完了後に開始
         // 3. copy-badgeが表示されてから、main-copy01、main-copy02をフェードイン
        .to(mainCopy01Elements, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
        }) // copy-badge完了後に開始
        .to(mainCopy02Elements, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
        }, '-=0.4')
        // 4. タイトルアニメーション実行
        .to([...titleLines, h4], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.2') // main-copyのアニメーションの終了少し前から開始
      })
      .catch(error => console.error('Error loading SVG:', error))
  }, [])

  return (
    <section id="key-visual" className="key-visual" ref={sectionRef}>
      <div className="key-visual-container">
        <div className="key-visual-svg" ref={containerRef}>
          {/* SVGはuseEffectで読み込み */}
        </div>
        <div className='key-visual-title' ref={titleRef}>
          <h3>
            <span className="title-line">「ネコのいる仕事時間」が叶う</span>
            <span className="title-line">保護ネコ×コワーキングスペース</span>
          </h3>
          <h4>事前予約で入会金<strong>1000</strong>円が<strong>無料！</strong></h4>
        </div>
      </div>
      <div className="scroll">
        Scroll
      </div>
    </section>
  )
}

export default KeyVisual

