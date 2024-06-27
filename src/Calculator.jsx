import Button from "./Button";
import React from 'react';
import { useState } from "react";
import './Keypad.css';

function Calculator() {
  const [display, setDisplay] = useState("");
  
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'Clear'
  ];

  const handleClick = (value) => {
    if (value === 'Clear') {
      setDisplay('');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  return(
    <div className="calculator">
        <div className="display">{ display }</div>
        <div className="buttons">
            {buttons.map((button, i) => <Button key={i} label={button} handleClick={handleClick} />)}
        </div>
    </div>
  );
}


export default Calculator;
