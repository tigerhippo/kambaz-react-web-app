import { Link } from "react-router";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link
          id="wd-github"
          to="https://github.com/tigerhippo/kambaz-react-web-app/tree/a1"
        >
          My GitHub Repo
        </Link>
      </li>
      <li>
        <Link to="/Labs">Labs</Link>
      </li>
      <li>
        <Link to="/Labs/Lab1">Lab 1</Link>
      </li>
      <li>
        <Link to="/Labs/Lab2">Lab 2</Link>
      </li>
      <li>
        <Link to="/Labs/Lab3">Lab 3</Link>
      </li>
      <li>
        <Link to="/Kambaz">Kambaz</Link>
      </li>
    </ul>
  );
}
