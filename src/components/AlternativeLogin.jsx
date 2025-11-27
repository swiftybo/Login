import classes from "./AlternativeLogin.module.css";
import HorizontalBreak from "./HorizontalBreak.jsx";
import AlternativeButton from "./AlternativeButton.jsx";
import appleLogo from "../assets/apple-logo.png";
import googleLogo from "../assets/google-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import { Link } from "react-router-dom";

export default function AlternativeLogin() {
  return (
    <main className={classes.content}>
      <section className={classes.alternativeLogin}>
        <HorizontalBreak breakWord={"or"} />
        <AlternativeButton enterprise={"Apple"} logoLink={appleLogo} />
        <AlternativeButton enterprise={"Google"} logoLink={googleLogo} />
        <AlternativeButton enterprise={"Facebook"} logoLink={facebookLogo} />
        <p className={classes.alternativeLogin__para}>
          Don't have an account?{" "}
          <Link className={classes.alternativeLogin__link}>Sign up</Link>
        </p>
      </section>
    </main>
  );
}
