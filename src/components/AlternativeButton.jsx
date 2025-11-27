import classes from "./AlternativeButton.module.css";
import appleLogo from "../assets/apple-logo.png";

export default function AlternativeButton() {
  return (
    <>
      <button className={classes.button}>
        <img src={appleLogo} alt="apple logo" className={classes.button__img} />
        {/* Continue with Apple */}
      </button>
    </>
  );
}
