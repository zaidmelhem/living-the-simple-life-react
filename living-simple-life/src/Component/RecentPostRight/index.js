import React from 'react'
import MainPostBody from '../MainPostBody'
import MainPostFooter from '../MainPostFooter'
import MainPostTitle from '../MainPostTitle'
import './style.css'

function RecentPostRight() {
  return (
    <div class="article-recent-main">
        <MainPostTitle/>
        <MainPostBody/>
        <MainPostFooter/>

    </div>
  )
}

export default RecentPostRight