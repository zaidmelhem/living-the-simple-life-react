import React from 'react'
import './style.css'
import img2 from './food.jpg'
function RecentPostLeft() {
  return (
    <div class="article-recent-secondary">
            <img src={img2} alt="" class="article-image" />
            <p class="article-info">february 13, 2023  | 3 comments</p>
    </div>
  )
}

export default RecentPostLeft