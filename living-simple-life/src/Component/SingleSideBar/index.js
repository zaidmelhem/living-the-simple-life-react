import React from 'react'
import SingleSideBarBody from '../SingleSideBarBody'
import SideBarTitle from '../SideBarTitle'
import './style.css'
const SingleSideBar = () => {
  return (
    <div class="sidebar-widget">
        <SideBarTitle/>
        <SingleSideBarBody/>
    </div>
  )
}

export default SingleSideBar