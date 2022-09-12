import React, { useState } from 'react'
import styles from "../../styles/Calculator.module.css"
import FibonacciOutput from './FibonacciOutput';


function FibonacciCalculator() {

    // Q4.2 Here
    const [nth, setNth] = useState(0);

    const handleNthUpdate=()=>{
        // Q4.3 Here
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
        <div></div>
        
        {/* Q4.4 here */}
        <FibonacciOutput nValue={nth}/>

      </div>
    </div>
  )
}

export default FibonacciCalculator