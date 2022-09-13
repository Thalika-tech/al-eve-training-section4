import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

//Question 8.1

function RunAwayEffect() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {

    if (counter === 0) {
      setCounter(counter + 1);
    }
    console.log(counter);
  }, [counter]);

  return (
    <div>
      I have re-rendered: {counter} times...
      {counter < 10 && (
        <Link href="/Q8-2">
          <div className={styles.card}>Continue...</div>
        </Link>
      )}
    </div>
  );
}

export default RunAwayEffect;
