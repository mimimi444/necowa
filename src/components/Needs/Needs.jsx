import React from 'react'
import Box from './Box/Box'
import './Needs.css'

function Needs() {
  const needsData = [
    {
      problem: 'ネコに作業を邪魔されている投稿を\nつい見ちゃう…',
      img: '/photos/need-01.png',
      solution: 'キーボードをネコに押される。オンラインミーティングへの乱入。ネコ飼いあるあるが日常茶飯事です。',
    },
    {
      problem: '保護猫活動の支援をしたいけど\n一歩踏み出せない…',
      img: '/photos/need-03.png',
      solution: 'ネコワへご来店いただくだけで、保護猫活動への支援につながります。',
    },
    {
      problem: 'ネコと一緒に仕事するのいいなぁ…',
      img: '/photos/need-02.png',
      solution: '店内には10頭以上のネコが闊歩。机の上、パソコンの上、トイレに立ったあなたの椅子の上が彼らの定位置です。',
    },
  ]

  return (
    <section className="needs">
      <div className="needs-container">
        <h2 className="needs-title">憧れの、ネコのいる暮らし<br /><span className='title-small'>諦めていませんか？</span></h2>
        <div className="needs-boxes">
          {needsData.map((item, index) => (
            <Box
              key={index}
              problem={item.problem}
              img={item.img}
              solution={item.solution}
              isReverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Needs

