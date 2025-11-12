import React from 'react'
import './ButtonSizes.css'

const ButtonSizes = () => {
  return (
    <div className="button-sizes-container">
    <div className="button-wrapper fixed-size">
        <div className="size-label">340 × 40</div>
        <button className="done-button fixed-size-button">
          Done
        </button>
      </div>
      
      <div className="button-wrapper fixed-size">
        <div className="size-label">340 × 40</div>
        <button className="done-button fixed-size-button">
          Done
        </button>
      </div>
      
      <div className="button-wrapper fixed-size">
        <button className="done-button fixed-size-button">
          Done
        </button>
      </div>
    </div>
  )
}

export default ButtonSizes

