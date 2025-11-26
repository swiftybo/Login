import { Link } from "react-router-dom";
import classes from "./LoginForm.module.css";
import { isNotEmpty } from "../util/validation";
import { isEmail } from "../util/validation";
import { useActionState } from "react";

function logInAction(prevFormState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");
  const remember = formData.get("remember");

  let errors = [];

  if (!isNotEmpty(username) || !isEmail(username)) {
    errors.push("You must provide a valid email / username.");
  }

  if (!isNotEmpty(password)) {
    errors.push("You must provide a password.");
  }

  if (errors.length > 0) {
    return { errors: errors, enteredDetails: { username, remember } };
  }

  return { errors: null };
}

export default function LoginForm() {
  // const loginCtx = useContext(LoginContext);
  const [formState, formAction] = useActionState(logInAction, { errors: null });

  return (
    <>
      <form action={formAction} className={classes.loginForm}>
        <div className={classes.loginForm__field}>
          <label htmlFor="username"></label>
          <input
            className={classes.loginForm__input}
            id="username"
            type="text"
            name="username"
            placeholder="Username or Email"
            defaultValue={formState.enteredDetails?.username}
          ></input>
        </div>

        <div className={classes.loginForm__field}>
          <label htmlFor="password"></label>
          <input
            className={classes.loginForm__input}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          ></input>
        </div>

        <section className={classes.loginForm__toolsSection}>
          <div className={classes.loginForm__checkbox}>
            <label htmlFor="remember">Remember me </label>
            <input
              style={{ "-webkit-transform": "scale(1.25)" }}
              id="remember"
              type="checkbox"
              name="remember"
              //BUG: checkbox seems to be always checked by default (apart from first render)
              defaultChecked={formState.enteredDetails?.remember}
            />
          </div>

          <div>
            <Link>Forgot Password?</Link>
          </div>
        </section>

        {formState.errors && (
          <ul className={classes.loginForm__errorsList}>
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <button className={classes.loginForm__button}>Log In</button>
      </form>
    </>
  );
}
