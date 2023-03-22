import { useRef } from 'react';
import WheelDigit from "./WheelDigit";
import "./DisplayFace.css";

export default function DisplayFace(){
    const digitRef = useRef(null);
    function bDn(){
        digitRef.current.decrement();
    }
    function bUp(){
        digitRef.current.increment();
    }
//  ========================================================
    return <div className="display-face">

        <button onClick={bUp}/>
        <WheelDigit 
            rollover="6"
            ref={digitRef}
        />
        <WheelDigit/>
        <button onClick={bDn}/>
        </div>
}