import React from 'react'
import './Navigation.css'

function Navigation({ isOpen, onClose }) {
  const menuItems = [
    { id: 1, subLabel: 'ネコに惹かれるあなたに', label: 'ネコワの特徴', href: '#needs' },
    { id: 2, subLabel: 'キャンペーン中！', label: '料金プラン', href: '#cta' },
    { id: 3, subLabel: 'ネコワ会員の皆様からのお声', label: 'レビュー', href: '#customer-voice' },
    { id: 4, subLabel: 'ライフスタイルをネコのワに', label: 'ご利用イメージ', href: '#life-image' },
    { id: 5, subLabel: '', label: 'よくある質問', href: '#faq' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    onClose()
    // スムーズスクロール（少し遅延させてメニューが閉じてからスクロール）
    if (href.startsWith('#')) {
      const targetId = href.substring(1)
      setTimeout(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          // Headerの高さを考慮してスクロール
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0
          const targetPosition = targetElement.offsetTop - headerHeight
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }, 300) // ナビゲーションのアニメーション時間と同じ
    }
  }

  return (
    <>
      {/* オーバーレイ */}
      {isOpen && (
        <div 
          className="navigation-overlay" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* ナビゲーションメニュー */}
      <nav className={`navigation ${isOpen ? 'navigation--open' : ''}`}>
        <div className="navigation-container">
          <div className="navigation-banner">
            <a href="#cta" onClick={(e) => handleLinkClick(e, '#cta')}>
              <img src="/navBnr.svg" alt="ネコワ" />
            </a>
            </div>
          <ul className="navigation-list">
          {menuItems.map((item) => (
            <li key={item.id} className="navigation-item">
              <a
                href={item.href}
                className="navigation-link"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.subLabel && (
                <span className="navigation-sub-label">{item.subLabel}</span>
              )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation

