import React from 'react'
import Box from './Box/Box'
import './FAQ.css'

function FAQ({ separateLight = false }) {
  const faqData = [
    {
      question: '仕事中にネコが粗相したら？',
      answer: 'ボタンでスタッフをお呼びください。慣れている方は備え付けのシート等でお掃除いただいても問題ございません。お召し物や機器等はなるべくご自身でご注意いただくようお願いいたします。',
    },
    {
      question: 'ネコの里親になれる？',
      answer: 'はい、もちろんです。一緒に時間を過ごす中で、離れたくないと思う子がいたらぜひ里親を検討していただけますと幸いです。里親になることが難しい場合、ネコの保護主様へお繋ぎし直接支援いただくことも可能です。',
    },
    {
      question: '飲食物の持ち込みはしていいの？',
      answer: '持ち込みは可能ですが、ネコが誤って食べてしまう可能性があるため、お食事は専用のエリアでお願いしています。例外として、店内で販売している猫・人兼用スナックはネコのいるエリアでもお召し上がりいただけます。',
    },
    {
      question: '写真を撮ってもいい？',
      answer: '他の利用者様のご迷惑にならない範囲でしたら問題ございません。',
    },
    {
      question: 'ゲストを呼んでもいい？',
      answer: 'はい、可能です。ただし、ゲスト様は2名までとさせていただいております。事前にお連れ様の情報もご登録の上、ご来店ください。',
    },
  ]

  return (
    <section id="faq" className={`faq ${separateLight ? 'separate-light' : ''}`}>
      <div className="faq-container">
        <h2 className="faq-title">よくある質問</h2>
        <div className="faq-boxes">
          {faqData.map((item, index) => (
            <Box key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

