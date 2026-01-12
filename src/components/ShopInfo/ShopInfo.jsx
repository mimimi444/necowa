import React from 'react'
import './ShopInfo.css'

function ShopInfo() {
  const shopInfo = {
    image: '/photos/necowa-outermock.jpg', // 店舗写真（後で追加）
    name: 'ネコワ',
    address: '〒150-0000\n東京都渋谷区渋谷3丁目4-5 4F',
    access: '渋谷駅C1出口から徒歩4分',
    hours: '平日: 10:00 - 22:00\n土日祝: 10:00 - 20:00',
    phone: '03-1234-5678',
    email: 'info@necowa.com'
  }

  return (
    <section id="shop-info" className="shop-info">
      <div className="shop-info-container">
        <h2 className="shop-info-title">店舗情報</h2>
        <div className="shop-info-wrapper">
          {/* 上段：写真エリア */}
          <div className="shop-info-image-area">
            <img 
              src={shopInfo.image} 
              alt="ネコワ店舗外観" 
              className="shop-info-image"
              onError={(e) => {
                // 画像が存在しない場合のフォールバック
                e.target.style.display = 'none'
              }}
            />
          </div>
          
          {/* 下段：店舗情報エリア（2カラムテーブル形式） */}
          <div className="shop-info-text-area">
            <table className="shop-info-table">
              <tbody>
                <tr>
                  <th className="shop-info-label">店舗名</th>
                  <td className="shop-info-value">{shopInfo.name}</td>
                </tr>
                <tr>
                  <th className="shop-info-label">住所</th>
                  <td className="shop-info-value">{shopInfo.address}</td>
                </tr>
                <tr>
                  <th className="shop-info-label">アクセス</th>
                  <td className="shop-info-value">{shopInfo.access}</td>
                </tr>
                <tr>
                  <th className="shop-info-label">営業時間</th>
                  <td className="shop-info-value">{shopInfo.hours}</td>
                </tr>
                <tr>
                  <th className="shop-info-label">電話番号</th>
                  <td className="shop-info-value">{shopInfo.phone}</td>
                </tr>
                <tr>
                  <th className="shop-info-label">メールアドレス</th>
                  <td className="shop-info-value">{shopInfo.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopInfo

