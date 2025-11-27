import classes from AlternativeButton.module.css

export default function AlternativeButton({ enterprise }) {
  return (
    <>
      <button className={classes.button}>
        <img src=""/>Continue with {enterprise}
      </button>
    </>
  );
}
