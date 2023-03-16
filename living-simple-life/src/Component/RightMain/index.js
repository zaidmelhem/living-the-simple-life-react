import React from 'react'
import SingleSideBar from '../SingleSideBar'
import SideBarRecentPost from '../SideBarRecentPost'
import './style.css'
const RightMain = () => {
  return (
    <aside class="sidebar">
      <SingleSideBar/>
      <SideBarRecentPost/>
    </aside>
  )
}

export default RightMain