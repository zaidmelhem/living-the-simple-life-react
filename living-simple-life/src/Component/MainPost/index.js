import React from 'react'
import HeadOfMainPost from '../HeadOfMainPost'
import MainPostBody from '../MainPostBody'
import MainPostFooter from '../MainPostFooter'
import MainPostTitle from '../MainPostTitle'
import './style.css'

function MainPost() {
  return (
    <article class="article-featured">
    <MainPostTitle/>
    <HeadOfMainPost/>
    <MainPostBody/>
    <MainPostFooter/>
    </article>
    
  )
}

export default MainPost