import React from 'react'
// import './MyHeader.css'
import Cardflip from '../Cardflip';

export default function MyHeader() {
  
  const myName: string = "Tom Hughes"

  return (
    <>
      <div>
        <div className='MyHeader'>
          {/* <p className='myName'>{myName}</p> */}
        <Cardflip />
        </div>

        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
    
  )
}
