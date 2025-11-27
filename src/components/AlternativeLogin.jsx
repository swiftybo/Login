import classes from "./AlternativeLogin.module.css";
import HorizontalBreak from "./HorizontalBreak.jsx";
import AlternativeButton from "./AlternativeButton.jsx";

export default function AlternativeLogin() {
  return (
    <main className={classes.alternativeLoginSection}>
      <HorizontalBreak breakWord={"or"} />
      <AlternativeButton />
    </main>
  );
}
