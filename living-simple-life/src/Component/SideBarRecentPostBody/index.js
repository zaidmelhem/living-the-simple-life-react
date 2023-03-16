import React from 'react'
import './style.css'
import food from './food.jpg'
import SideBarRecentPostTilte from '../SideBarRecentPostTitle'

const SideBarRecentPostBody = () => {
  return (
    <div class="widget-recent-post">
        <SideBarRecentPostTilte/>
        <img src={food} alt="" class="widget-image" />
    </div>
  )
}

export default SideBarRecentPostBody