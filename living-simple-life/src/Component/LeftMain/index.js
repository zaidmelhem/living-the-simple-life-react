import React from 'react'
import MainPost from '../MainPost'
import RecentPost from '../RecentPost'
import './style.css'
function LeftMain() {
  return (
    <main role="main">
        <MainPost/>
        {[1,2,3].map(item=><RecentPost/>)}
    </main>
  )
}

export default LeftMain