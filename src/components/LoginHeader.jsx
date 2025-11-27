import classes from "./LoginHeader.module.css";

export default function LoginHeader() {
  return (
    <div className={classes.headerSection}>
      <h1 className={classes.header}>WELCOME BACK</h1>
      <p className={classes.subheader}>Sign in to continue</p>
    </div>
  );
}
