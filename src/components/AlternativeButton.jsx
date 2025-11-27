import classes from "./AlternativeButton.module.css";

export default function AlternativeButton({ enterprise, logoLink }) {
  return (
    <>
      <button className={classes.button}>
        <img
          src={logoLink}
          alt={`${enterprise} logo`}
          className={classes.button__img}
        />
        Continue with {enterprise}
      </button>
    </>
  );
}
