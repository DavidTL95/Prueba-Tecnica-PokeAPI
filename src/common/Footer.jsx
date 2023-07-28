import './Footer.css'

import React from 'react'

export const Footer = () => {
  return (
    <div className='bottom'>
        <div className="bottomButton">
            <p className='bgCircleWhite'>A</p>
            <p>See details</p>
        </div>
        <div className="bottomButton">
            <p className='bgCircleWhite'>X</p>
            <p>Habitat</p>
        </div>
        <div className="bottomButton">
            <p className='bgCircleWhite'>Y</p>
            <p>Sort</p>
        </div>
        <div className="bottomButton">
            <p className='bgCircleWhite'>+</p>
            <p>See evaluation</p>
        </div>
        <div className="bottomButton">
            <p className='bgCircleWhite'>B</p>
            <p>Back</p>
        </div>
    </div>
  )
}