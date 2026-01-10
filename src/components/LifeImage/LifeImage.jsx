import React from 'react'
import Section from './Section/Section'
import './LifeImage.css'

function LifeImage({ separateLight = false }) {
  const lifeImageData = [
    {
      introduction: '会社員の会員様。休日に自己研鑽や資格の勉強。家では集中ができないのでネコワへいらっしゃいます。',
      img: '/photos/lifeImage-01.png',
      title: {
        'title-sub-top': 'サクッと作業に',
        'title-main': 'ひとなでプラン',
        'title-sub-bottom': 'ドロップイン1時間〜',
      },
      timeline: [
        { time: '11:00', action: 'のんびりくつろぐネコたちを横目に受付を済ませる。コーヒー片手にテーブルで読書。' },
        { time: '12:00', action: '集中が切れたタイミングでふと横を見ると、隣にネコが…！そっと撫でると気持ちよさそうな表情。もうちょっと頑張ろう。' },
        { time: '13:00', action: '本も読み終わったし名残惜しいけどチェックアウト。またくるね' },
      ],
    },
    {
      introduction: 'フリーランスの会員様。いつもと環境を変えてがっつり作業を進めたい時などにいらっしゃいます。',
      img: '/photos/lifeImage-02.png',
      title: {
        'title-sub-top': 'しっかり集中',
        'title-main': '膝のりプラン',
        'title-sub-bottom': '1日利用 8時間まで',
      },
      timeline: [
        { time: '10:00', action: '設備が整っていて、朝から夜まで滞在できるネコワへ。到着してPCを開く。' },
        { time: '11:30', action: 'しばらくするとネコがやってきた。暖をとりに来たのかも？' },
        { time: '13:00', action: 'ちょうどお昼時なのでランチ休憩。食事エリアで持ち込みのサンドイッチを食べる。' },
        { time: '13:30', action: '席に戻ると、さっきまで座っていたところにネコが…！癒しも補給して、引き続きお仕事！' },
        { time: '18:00', action: 'ネコを眺めつつノンストレスで集中できて、お仕事も目標より少し先まで終わらせられた。家に帰ったらみたかったドラマを見ようかな〜' },
      ],
    },
  ]

  return (
    <section className={`life-image ${separateLight ? 'separate-light' : ''}`}>
      <div className="life-image-container">
        <h2 className="life-image-title">
          <span style={{fontSize:'.75rem'}}>ライフスタイルをネコのワに。</span><br />
          ネコワのある日常
        </h2>
        <div className="life-image-sections">
        {lifeImageData.map((data, index) => (
          <Section
            key={index}
            introduction={data.introduction}
            img={data.img}
            titleData={data.title}
            timelineData={data.timeline}
          />
        ))}
        </div>
      </div>
    </section>
  )
}

export default LifeImage

