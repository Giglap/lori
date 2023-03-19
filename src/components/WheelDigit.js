import React, { useState } from 'react';
import "./WheelDigit.css";

export default function WheelDigit() {
    const [digit, setDigit] = useState(0);

    function handleMouseWheel(event){
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        if(event.deltaY>0){
            digit > 8 ? setDigit(0):setDigit(digit+1);
        } else {
            digit < 1 ? setDigit(9):setDigit(digit-1);
        }
    }
    
    function handleCaptureClick(e) {
        e.stopPropagation(); // stop event propagation on click event
      }

    return (
      <div className="box" onWheel={handleMouseWheel} onClickCapture={handleCaptureClick}>{digit}</div>
    );
  }