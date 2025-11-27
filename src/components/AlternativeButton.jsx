import classes from "./AlternativeButton.module.css";

export default function AlternativeButton() {
  return (
    <>
      <button className={classes.button}>
        <img
          src="../assets/apple-logo.png"
          alt="apple logo"
          className={classes.button__img}
        />
        Continue with Apple
      </button>
    </>
  );
}
