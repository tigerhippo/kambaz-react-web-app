import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <Nav variant="pills" id="wd-toc">
      <Nav.Item>
        <Nav.Link id="wd-labs" as={Link} to="/Labs">
          Labs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="wd-a1"
          as={Link}
          to="/Labs/Lab1"
          active={pathname.includes("Lab1")}
        >
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="wd-a2"
          as={Link}
          to="/Labs/Lab2"
          active={pathname.includes("Lab2")}
        >
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="wd-a3"
          as={Link}
          to="/Labs/Lab3"
          active={pathname.includes("Lab3")}
        >
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="wd-a4"
          as={Link}
          to="/Labs/Lab4"
          active={pathname.includes("Lab4")}
        >
          Lab 4
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="wd-kambaz" as={Link} to="/Kambaz">
          Kambaz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="wd-github"
          href="https://github.com/tigerhippo/kambaz-react-web-app/tree/a3"
        >
          My GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
