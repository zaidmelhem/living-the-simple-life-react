import React from 'react'
import './style.css'
import SideBarRecentPostAllBody from '../SideBarRecentPostAllBody'
const SideBarRecentPost = () => {
  return (
    <div class="sidebar-widget">
      {[1,2,3].map(item=><SideBarRecentPostAllBody/>)}
    </div>
  )
}

export default SideBarRecentPost