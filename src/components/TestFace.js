import React, { useRef, useImperativeHandle } from "react";
import TestDigit from "./TestDigit";
import "./TestFace.css";

export default function TestFace(){
    const bobRef = useRef(null);

    function handleButtonClick() {
      // Call the method on bob component
      bobRef.current.doSomething();
    }
    return (
        <div>
          {/* Render other components here */}
          <button onClick={handleButtonClick}>Do Something in Bob</button>
          <TestDigit ref={bobRef} />
        </div>
      );
}