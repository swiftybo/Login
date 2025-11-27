import classes from "./HorizontalBreak.module.css";

export default function HorizontalBreak() {
  return (
    <div className={classes.break}>
      <hr className={classes.breakline}></hr>
      <span>or</span>
      <hr className={classes.breakline}></hr>
    </div>
  );
}
