import React, { useState } from 'react'
import styles from "../../styles/Calculator.module.css"
import FibonacciOutput from './FibonacciOutput';


function FibonacciCalculator() {

    // Q4.2 Here - 1/3 expected a useRef
    const [nth, setNth] = useState(0); //remember to type your states. the input is a number input so you can expect integers

    const handleNthUpdate=()=>{
        // Q4.3 Here - 1/2 could be simplified with useRef, The input is has type number so you do not need parseInt you also wouldn't need it if you typed you state.
        setNth(parseInt((document.getElementById("nth-value") as HTMLInputElement).value)); 
    }

  return (
    <div className={styles["cal-container"]}>
      <div className={styles["cal-input"]}>

        <label htmlFor="nth-value">Input a n-th Value:</label>
        <input type='number' id="nth-value"></input>

        <button id="cal-btn" onClick={handleNthUpdate}>Calculate</button>

      </div>
      <div className={styles["cal-output"]}>
        <div>
        
        {/* Q4.4 here */}
        <FibonacciOutput nValue={nth}/>
        </div>

      </div>
    </div>
  )
}

export default FibonacciCalculator