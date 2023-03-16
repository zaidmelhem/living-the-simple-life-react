import React from 'react'
import NavItem from '../NavItem'
import './style.css'

function RightHeader() {
  return (
    <nav>
    <ul>
      {[1,2,3].map(item=> <NavItem/>)}
    </ul>
    </nav>
  )
}

export default RightHeader