import React from 'react'
import LeftHeader from '../LeftHeader'
import RightHeader from '../RightHeader'
import './style.css'
function Header() {
  return (
   <header>
    <div className="container-header container-flex-header">
    <LeftHeader/>
    <RightHeader/>
    </div>
   </header>
  )
}

export default Header