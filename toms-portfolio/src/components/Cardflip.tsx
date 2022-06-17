import React from 'react'

export default function Cardflip() {
  const labelText: string = "flipping card, photo and info"

  return (
      <>
    <div className="flip-card" aria-label={labelText} aria-required="true">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className='my-photo' src="photocard.png" alt="Avatar"/>  
    </div>
    <div className="flip-card-back">
      <h1>Tom</h1>
      <p>Architect & Engineer</p>
      <p>Hire Me</p>
    </div>
  </div>
</div>
</>
  )
}

{/* " for the image */}