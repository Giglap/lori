import React, { useRef } from "react";
import TestDigit from "./TestDigit";
import "./TestFace.css";

export default function TestFace(){
    const incRef = useRef(null); //this is needed

    function handleButtonClick() {
      // Call the method on bob component
      incRef.current.doSomething();
    }
    return (
        <div>
          {/* Render other components here */}
          <button onClick={handleButtonClick}>Do Something in Bob</button>
          <TestDigit ref={incRef} />
        </div>
      );
}