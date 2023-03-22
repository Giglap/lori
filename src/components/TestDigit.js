import React, { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';


const TestDigit = React.forwardRef((props, ref) => {
    // Assign the method to the ref
    useImperativeHandle(ref, () => ({
      doSomething
    }));
    const [title, setTitle] = useState('default')
    // Define the method to be called from the parent component
    function doSomething() {
        setTitle("this happened in Bob");
      console.log("Doing something in Bob");
    }
  
  
    return <div>{title}</div>;
  });
  export default TestDigit