import React from 'react'
import Footer from '../Footer'
import LeftMain from '../LeftMain'
import RightMain from '../RightMain'
import './style.css'

function Main() {
  return (
    <div class="container container-flex">
      <LeftMain/>
      <RightMain/>
    </div>
  )
}

export default Main