import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      Error. You seemed to have got lost! Follow this <Link to={"/"}>link</Link>{" "}
      to get back to the main Login page.
    </div>
  );
}

export default ErrorPage;
