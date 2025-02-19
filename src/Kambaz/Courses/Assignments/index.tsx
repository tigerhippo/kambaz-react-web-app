import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsControls from "./AssignmentsControls";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-all-assignments">
        <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS{" "}
            <AssignmentsControlButtons />
          </div>
          <ListGroup className="wd-assignments-list rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <ListGroup.Item className="wd-assignment d-flex justify-content-between align-items-center p-3 ps-1">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdAssignment className="text-success me-4 fs-3" />
                    <div>
                      <Link
                        to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-dark text-decoration-none"
                      >
                        {" "}
                        <span className="fs-3">{assignment.title}</span>
                      </Link>
                      <br />
                      <span className="text-danger">
                        Multiple Modules
                      </span> |{" "}
                      <span className="text-secondary">
                        <span className="fw-bold">Not available until</span>{" "}
                        {assignment.notAvailableUntil} |
                        <br />
                        <span className="fw-bold">Due</span> {assignment.due} |{" "}
                        {assignment.points}
                      </span>
                    </div>
                  </div>
                  <AssignmentControlButtons />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
