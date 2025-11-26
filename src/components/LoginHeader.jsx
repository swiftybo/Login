import classes from "./LoginHeader.module.css";

export default function LoginHeader() {
  return (
    <div className={classes.login__headerSection}>
      <h1 className={classes.login__header}>WELCOME BACK</h1>
      <p className={classes.login__subheader}>Sign in to continue</p>
    </div>
  );
}
