import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Box from './Box/Box'
import './CustomerVoice.css'

// ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger)

function CustomerVoice() {
  const sectionRef = useRef(null)

  const customerVoiceData = [
    {
      img: '/photos/voice-01.png',
      content: '家がペット不可でもここに来ればネコに会える。\n作業をしに行くモチベーションも上がるので、仕事も捗って一石二鳥です。',
    },
    {
      img: '/photos/voice-02.jpg',
      content: '仕事でストレスが溜まってもネコののびのびと過ごす様子を見ると癒されます。\nタイトな納期やプレッシャーのかかる仕事でも潰れず乗り越えることができました。',
    },
    {
      img: '/photos/voice-03.png',
      content: '里親を検討していましたが、ネコとの生活に不安がありました。\n下僕プランで実際にネコのお世話をしながら仕事をしてみて、下僕生活のイメージが湧きました。よくお世話していた子を引き取り、今は下僕プランを卒業してお家で一緒に過ごしています。\n（集中できるので、たまにまたネコワにも来ています…スタッフさんに悩み事を相談できるので助かります）',
    },
    {
      img: '/photos/voice-04.png',
      content: '家庭の事情で里親にはなれないのですが、保護猫支援に関わりたいと思っていました。\nここなら利用料がネコに還元されるし、利益の一部が愛護団体へ寄付されるとのことで会員になりました。\n仕事をする時間が支援に直結するので、働くモチベーションも上がるし支援活動の第一歩にもぴったりでした。',
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // すべてのcustomer-voice-box要素を取得
    const boxes = section.querySelectorAll('.customer-voice-box')

    if (boxes.length === 0) return

    // 初期状態：左上を起点に回転しながら縮小、透明
    gsap.set(boxes, {
      opacity: 0,
      rotation: -20,
      scale: 1.2,
      transformOrigin: 'top left'
    })

    // 各Boxに対してScrollTriggerアニメーションを設定
    boxes.forEach((box) => {
      gsap.to(box, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: box,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    })

    // クリーンアップ
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        // セクション内の要素に関連するScrollTriggerをすべてkill
        if (trigger.trigger && section.contains(trigger.trigger)) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section className="customer-voice" ref={sectionRef}>
      <div className="customer-voice-container">
        <h2 className="customer-voice-title">ネコワ会員の皆様からのお声</h2>
        <div className="customer-voice-boxes">
          {customerVoiceData.map((item, index) => (
            <Box key={index} img={item.img} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerVoice

