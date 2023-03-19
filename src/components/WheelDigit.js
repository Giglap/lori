import React, { useState } from 'react';
import "./WheelDigit.css";

export default function WheelDigit() {
    const [digit, setDigit] = useState(0);

    function handleMouseWheel(event){
        // event.preventDefault();
        // event.stopPropagation();
        // event.nativeEvent.stopImmediatePropagation();
        
        if(event.deltaY>0){
            digit < 1 ? setDigit(9):setDigit(digit-1);
        } else {
            digit > 8 ? setDigit(0):setDigit(digit+1);
        }
        console.log(0);
        if(event.deltaX>0){
            digit < 1 ? setDigit(9):setDigit(digit-1);
        } else {
            digit > 8 ? setDigit(0):setDigit(digit+1);
        }
    }

    const handleMouseEnter = () => {
        document.body.style.overflow = 'hidden';
      }
    
      const handleMouseLeave = () => {
        document.body.style.overflow = 'auto';
      }
    
    return (
            <div 
            className="inner-container" 
            onWheel={handleMouseWheel} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                {digit}
            </div>
    );
  }