import React from 'react'
import "../style/footer.sass";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const footer = () => {
  return (
    <div className='footer'>
        <div className='link_box'>
      <div className='link'>
        <h1>CATEGORIES</h1>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
      </div>
      <div className='link'>
        <h1>CONTACT</h1>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Categories</p>
        <p>About</p>
      </div>
      <div className='link'>
        <p>United States <MdOutlineKeyboardArrowDown fontSize={20} style={{marginLeft: '6px'}} /></p>
      </div>
      </div>
    </div>
  )
}

export default footer
