import classes from "./HorizontalBreak.module.css";

export default function HorizontalBreak({ breakWord }) {
  return (
    <div className={classes.break}>
      <hr className={classes.breakline}></hr>
      <span className={classes.breakWord}>{breakWord}</span>
      <hr className={classes.breakline}></hr>
    </div>
  );
}
