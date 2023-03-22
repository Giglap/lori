import React, { useState, useRef } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import "./WheelDigit.css";

const WheelDigit = React.forwardRef((props, ref) => {
   // Assign the method to the ref
    useImperativeHandle(ref, () => ({
        increment,
        decrement
    }));
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
        digit > rollover-2 ? setDigit(0):setDigit(digit+1);
    }
    function decrement(){
        digit < 1 ? setDigit(rollover-1):setDigit(digit-1);
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
  });
  export default WheelDigit