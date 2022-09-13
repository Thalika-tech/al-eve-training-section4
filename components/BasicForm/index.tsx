import styles from "@/styles/Forms.module.css";
import { FormEvent, useState } from "react";

function BasicForm() {
  // Q5.1
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameIsTouched, setUsernameIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const usernameIsValid = username.trim().length >= 5;
  const passwordIsValid = password.trim().length >= 5 && /\d/.test(password);

  let formIsValid = false;

  if (usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const handleUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleUsernameBlur = () => {
    setUsernameIsTouched(true);
  };

  const handlePasswordBlur = () => {
    setPasswordIsTouched(true);
  };

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    // Q5.2.1
    event.preventDefault();

    if (usernameIsValid && passwordIsValid) {
      alert("User Signed In");
      setUsername("");
      setPassword("");
    }

    setUsernameIsTouched(true);
    setPasswordIsTouched(true);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>Sign in</h2>
      <div className={styles["control-group"]}>
        <div
          className={
            !usernameIsValid && usernameIsTouched
              ? `${styles["form-control"]}  ` + `${styles["invalid"]} `
              : `${styles["form-control"]}  ` 
          }
        >
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" onChange={handleUsername} onBlur={handleUsernameBlur} />
        </div>
        <div
          className={
            !passwordIsValid && passwordIsTouched
              ? `${styles["form-control"]}  ` + `${styles["invalid"]} `
              : `${styles["form-control"]}  ` 
          }
        >
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handlePassword} onBlur={handlePasswordBlur} />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default BasicForm;
