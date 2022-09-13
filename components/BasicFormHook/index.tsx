import styles from "@/styles/Forms.module.css";
import { FormEvent } from "react";
import { EMAIL, PASSWORD } from "constant/validations";
import useInput from "hooks/useInput";

function BasicFormHook() {
  const usernameInput = useInput((value) => EMAIL(value));
  const passwordInput = useInput((value) => PASSWORD(value));

  let formIsValid = false;

  if (usernameInput.isValid && passwordInput.isValid) {
    formIsValid = true;
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    alert("Valid");
    usernameInput.reset();
    passwordInput.reset();
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>Sign in</h2>
      <div className={styles["control-group"]}>
        <div className={`${styles["form-control"]} ${usernameInput.hasError && styles["invalid"]}`}>
          <label htmlFor="username">User Name</label>
          <input type="text" onChange={usernameInput.inputChangeHandler} onBlur={usernameInput.inputBlurHandler} id="username" />
        </div>
        <div className={`${styles["form-control"]} ${passwordInput.hasError && styles["invalid"]}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={passwordInput.inputChangeHandler}
            onBlur={passwordInput.inputBlurHandler}
            id="password"
          />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default BasicFormHook;
