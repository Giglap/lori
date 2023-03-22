import React, { useState, useRef } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import "./WheelDigit.css";

export default function WheelDigit(props) {
    const [digit, setDigit] = useState(0);
    const incRef = useRef(null);
    let rollover = props.rollover;
    if(rollover==undefined){rollover = 10;}
    function handleMouseWheel(event){
        if(event.deltaY>0){
            increment();
        } else {
            decrement();
        }
    }
    function increment(){
        digit < 1 ? setDigit(rollover-1):setDigit(digit-1);
    }
    function decrement(){
        digit > rollover-2 ? setDigit(0):setDigit(digit+1);
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
            ref={incRef}
            >
                {digit}
            </div>
    );
  }