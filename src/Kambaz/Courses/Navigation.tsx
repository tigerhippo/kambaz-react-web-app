import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const linkNames = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <ListGroup
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0"
    >
      {linkNames.map((linkName) => (
        <ListGroup.Item
          key={linkName}
          as={Link}
          to={`/Kambaz/Courses/${cid}/${linkName}`}
          className={`list-group-item text-danger border border-0 
            ${pathname.includes(linkName) ? "active" : ""}`}
        >
          {linkName}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
