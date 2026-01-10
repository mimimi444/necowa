import React from 'react'
import './Timeline.css'

function Timeline({ items }) {
  const defaultItems = [
    { time: '09:00', action: 'イベント1' },
    { time: '12:00', action: 'イベント2' },
    { time: '18:00', action: 'イベント3' },
  ]

  const timelineItems = items || defaultItems

  return (
    <div className="life-image-timeline">
      {timelineItems.map((item, index) => (
        <div key={index} className="life-image-timeline-item">
          <div className="life-image-timeline-time">{item.time}</div>
          <div className="life-image-timeline-action">{item.action}</div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
