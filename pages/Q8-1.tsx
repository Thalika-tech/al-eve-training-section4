import RunAwayEffect from "@/components/RunAwayEffect";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Q81: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EVE Section4: Q6</title>
        <meta name="description" content="Section 4 in EVE React Evaluation. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Question 8:</h1>

        <p className={styles.description}>The below component is a run-away effect. How would you fix it?</p>

        <div className={styles.grid}>
          <RunAwayEffect />
        </div>
      </main>
    </div>
  );
};

export default Q81;
