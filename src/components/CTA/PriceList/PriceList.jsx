import React from 'react'
import './PriceList.css'

function PriceList() {
  return (
    <div className="price-list">
      <h3 className="price-list-title">選べるプラン</h3>

      <div className="price-list-grid">
        <div className="price-list-grid-item">
          <h3 className="price-list-section-title">ドロップイン</h3>
          <div className="price-list-items">
            <div className="price-list-item">
              <h4 className="price-list-item-name">ひとなでプラン</h4>
              <div className="price-list-item-details">
                <p>1時間 1000円</p>
                <p>以降30分ごと 500円</p>
              </div>
            </div>
            <div className="price-list-item">
              <h4 className="price-list-item-name">膝のりプラン</h4>
              <div className="price-list-item-details">
                <p>1day 4000円</p>
              </div>
            </div>
          </div>
        </div>

        <div className="price-list-grid-item">
          <h3 className="price-list-section-title">顔見知りプラン</h3>
          <p className="price-list-section-subtitle">毎月のサブスクプラン</p>
          <div className="price-list-items">
            <div className="price-list-item">
              <h4 className="price-list-item-name">オープンデスク</h4>
              <div className="price-list-item-details">
                <p className="price-list-item-price">12000円</p>
              </div>
            </div>
            <div className="price-list-item">
              <h4 className="price-list-item-name">個室</h4>
              <div className="price-list-item-details">
                <p className="price-list-item-price">48000円</p>
              </div>
            </div>
          </div>
        </div>

        <div className="price-list-grid-item price-list-grid-item--full">
          <h3 className="price-list-section-title">下僕プラン<span style={{fontSize:'.75rem'}}>（お世話してくれる分割引）</span></h3>
          <div className="price-list-items">
              <p className="price-list-item-description">
                定額プランをご利用の方限定
              <br />
                週1〜 在籍ネコのお世話日数に応じて利用料金を10％割引
              </p>
              <p className="price-list-item-note">
                ※オプション、おやつ代は除く
              </p>
          </div>
        </div>
      </div>

      <div className="price-list-footer">
        <p className="price-list-footer-text">
          バーチャルオフィスとしてのご契約も可能です。
          <br />
          詳しくはお問い合わせください。
        </p>
      </div>
    </div>
  )
}

export default PriceList

