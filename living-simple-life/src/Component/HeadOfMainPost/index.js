import React from 'react'
import './style.css'
import img1 from './clock.jpg'
function HeadOfMainPost() {
  return (
    <>
        <img src={img1}class="article-image" />
        <p class="article-info">february 13, 2023  | 3 comments</p>
    </>
  )
}

export default HeadOfMainPost