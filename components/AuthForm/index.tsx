import styles from "@/styles/Forms.module.css";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
// We don't use the signIn? There is no question refeerig to it?

async function handleSignUp(email: string, password: string) {
  const result = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
}

async function handleSignIn(email: string, password: string) {
  // This api route doesn't exist
  const result = await fetch("/api/auth/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
}

function AuthForm() {
  const [isSignin, setIssignin] = useState<boolean>(false);

  //Q7.1.1 - 2/2
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function switchAuthHandler() {
    setIssignin((prevState) => !prevState);
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSignin) {
      // Question 7.1.3 5/5 You get all marks free because the question was not correct.
      handleSignIn(email, password);
      //Question 7.1.4 - 1/1 free marks
    } else {
      // Question 7.1.2 - 4/4
      handleSignUp(email, password);
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>{isSignin ? "Sign in" : "Sign up"}</h2>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" required onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required onChange={(event) => setPassword(event.target.value)} />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit">Submit</button>
        <a onClick={switchAuthHandler}>{!isSignin ? "Sign in" : "Sign up"} instead?</a>
      </div>
    </form>
  );
}

export default AuthForm;
