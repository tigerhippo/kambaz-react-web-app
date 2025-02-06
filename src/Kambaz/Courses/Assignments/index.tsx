import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsControls from "./AssignmentsControls";

export default function Assignments() {
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
            <ListGroup.Item className="wd-assignment d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="text-success me-4 fs-3" />
                <div>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-dark text-decoration-none"
                  >
                    {" "}
                    <span className="fs-3">A1</span>
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span className="text-secondary">
                    <span className="fw-bold">Not available until</span> May 6
                    at 12:00am |
                    <br />
                    <span className="fw-bold">Due</span> May 13 at 11:59pm | 100
                    pts
                  </span>
                </div>
              </div>
              <AssignmentControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="text-success me-4 fs-3" />
                <div>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-dark text-decoration-none"
                  >
                    {" "}
                    <span className="fs-3">A2</span>
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span className="text-secondary">
                    <span className="fw-bold">Not available until</span> May 13
                    at 12:00am |
                    <br />
                    <span className="fw-bold">Due</span> May 20 at 11:59pm | 100
                    pts
                  </span>
                </div>
              </div>
              <AssignmentControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdAssignment className="text-success me-4 fs-3" />
                <div>
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-dark text-decoration-none"
                  >
                    {" "}
                    <span className="fs-3">A3</span>
                  </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span className="text-secondary">
                    <span className="fw-bold">Not available until</span> May 20
                    at 12:00am |
                    <br />
                    <span className="fw-bold">Due</span> May 27 at 11:59pm | 100
                    pts
                  </span>
                </div>
              </div>
              <AssignmentControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
