import React from 'react'
import './style.css'
import me from './me.jpg'
const SingleSideBarBody = () => {
  return ( 
    <>
    <img src={me} alt="" class="widget-image" />
        <p class="widget-body">
        I find life better, and I'm happier, when things are nice and
        simple.
        </p>
    </>
    
  )
}

export default SingleSideBarBody