import React from 'react'
import RecentPostLeft from '../RecentPostLeft'
import RecentPostRight from '../RecentPostRight'
import './style.css'

function RecentPost() {
  return (
    <article class="article-recent">
        <RecentPostRight/>
        <RecentPostLeft/>
    </article>
  )
}

export default RecentPost