import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { Assignment } from "../../../types";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {currentUser.role === "FACULTY" && <AssignmentsControls />}
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-all-assignments">
        <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary">
            {currentUser.role === "FACULTY" && (
              <BsGripVertical className="me-2 fs-3" />
            )}{" "}
            ASSIGNMENTS{" "}
            {currentUser.role === "FACULTY" && <AssignmentsControlButtons />}
          </div>
          <ListGroup className="wd-assignments-list rounded-0">
            {assignments
              .filter((assignment: Assignment) => assignment.course === cid)
              .map((assignment: Assignment) => (
                <ListGroup.Item className="wd-assignment d-flex justify-content-between align-items-center p-3 ps-1">
                  <div className="d-flex align-items-center">
                    {currentUser.role === "FACULTY" && (
                      <BsGripVertical className="me-2 fs-3" />
                    )}
                    <MdAssignment className="text-success me-4 fs-3" />
                    <div>
                      {currentUser.role === "FACULTY" && (
                        <Link
                          to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                          className="wd-assignment-link text-dark text-decoration-none"
                        >
                          {" "}
                          <span className="fs-3">{assignment.title}</span>
                        </Link>
                      )}
                      {currentUser.role !== "FACULTY" && (
                        <span className="fs-3">{assignment.title}</span>
                      )}
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
                  {currentUser.role === "FACULTY" && (
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                      assignmentName={assignment.title}
                      deleteAssignment={(assignmentId) => {
                        dispatch(deleteAssignment(assignmentId));
                      }}
                    />
                  )}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
